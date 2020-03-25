import axios from '../utils/request'

// 获取首页banner
let getBanner = ()=>{
    return axios.get('/')
}
//获取首页channel
let getChannel = ()=>{
    return axios.get('/')
}

let getBrandList = ()=>{
    return axios.get('/')
}

let getnewGoodsList = ()=>{
    return axios.get('/')
}

let gethotGoodsList = ()=>{
    return axios.get('/')
}

let gettopicList = ()=>{
    return axios.get('/')
}

export {
    getBanner,
    getChannel,
    getBrandList,
    getnewGoodsList,
    gethotGoodsList,
    gettopicList
}