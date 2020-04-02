import axios from '../utils/request'

// 专题页面渲染接口
export let getTopicList = ()=>{
    return axios.get('/topic/list?page=1&size=100')
}