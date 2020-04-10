import axios from '../utils/request'

// 专题页面渲染接口
export let getTopicList = ()=>{
    return axios.get('/topic/list?page=1&size=100')
}
//获取专题详情
export let getTopicDetail=(id:string)=>{
    return axios.get(`/topic/detail?id=${id}`)
}