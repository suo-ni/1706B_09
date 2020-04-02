import axios from '../utils/request'

export let getTopicList = ()=>{
    return axios.get('/topic/list?page=1&size=100')
}   

export let getTopicDetail = (id:string)=>{
    return axios.get(`/topic/detail?id=${id}`)
}