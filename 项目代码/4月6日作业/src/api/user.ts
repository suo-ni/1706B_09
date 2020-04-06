import axios from '../utils/request'

// 登陆接口
export let login = (mobile:string, password:string)=>{
    return axios.post('/auth/loginByMobile', {
        mobile,
        password
    })
}
//获取用户信息
export let getUserInfo=()=>{
  return axios.get('/user/info')
}
//更新用户头像
export let updateAvatar=(avatar:string)=>{
  return axios.post('/user/updataInfo',{avatar})
}