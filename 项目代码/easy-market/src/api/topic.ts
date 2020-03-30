import axios from '../utils/request'

export let getTopicList = ()=>{
    return axios.get('/topic/list?page=1&size=100')
}   