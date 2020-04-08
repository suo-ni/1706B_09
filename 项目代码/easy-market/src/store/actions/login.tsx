import { getLogin, uploadAvatar, getUserInfo, updateAvatar } from "../../api/login"


//登录
export let loginAction = (mobile: string, password: string) => {
    return async(dispatch: Function) => {
        let data = await getLogin(mobile, password)
        if(data) {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        }
    }
}

//用户信息
export let userInfoAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getUserInfo();
        console.log('用户信息....',data);
        if(data){
            dispatch({
            type: 'UPDATE_INFO',
            payload: data
          })
        }
        
    }
}
//上传头像
export let uploadAvatarAction = (form:FormData)=>{
    return async (dispatch:Function)=>{
        let data = await uploadAvatar(form);
        console.log('UPLOAD_AVATAR',data);
        if(data){
            dispatch({
            type: 'UPLOAD_AVATAR',
            payload: data
          })
        }
        
    }
}

//更新头像
export let updateAvatarAction = (avatar:string)=>{
    return async (dispatch:Function)=>{
        let data = await updateAvatar(avatar);
        console.log('UPDATE_AVATAR',data,updateAvatar(avatar));
        if(data){
            dispatch({
            type: 'UPDATE_AVATAR',
            payload: avatar
          })
        }
        
    }
}