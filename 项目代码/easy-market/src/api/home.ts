import axios from '../utils/request'

// 获取首页banner
let getBanner = ()=>{
    return axios.get('/')
}

export {
    getBanner,
}