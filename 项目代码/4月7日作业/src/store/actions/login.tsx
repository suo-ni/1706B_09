import { login ,getUserInfo,uploadAvatar,updateAvatar} from '../../api/user'

export let loginAction = (mobile: string, password: string) => {
  return async (dispatch: Function) => {
    let data = await login(mobile, password);
    if (data) {
      console.log('data...', data);
      dispatch({
        type: 'LOGIN',
        payload: data.data
      })
    }
  }
}

export let logoutAction = () => {
  return ({
    type: 'LOGOUT'
  })
}

export let userInfoAction=()=>{
  return async (dispatch: Function) => {
    let data = await getUserInfo();
    if (data) {
      console.log('data...', data);
      dispatch({
        type: 'UPDATE_INFO',
        payload: data.data
      })
    }
  }
}

export let uploadAvatarAction=(form:FormData)=>{
  return async (dispatch: Function) => {
    let data = await uploadAvatar(form);
    if (data) {
      dispatch({
        type: 'UPLOAD_AVATAR',
        payload: data
      })
    }
  }
}

export let updateAvatarAction=(avatar:string)=>{
  return async (dispatch: Function) => {
    let data = await updateAvatar(avatar);
    if (data) {
      dispatch({
        type: 'UPDATE_AVATAR',
        payload: avatar
      })
    }
  }
}