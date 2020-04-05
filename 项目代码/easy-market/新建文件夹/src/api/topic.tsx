import axios from '../utils/request'

//专题
export let Topic = () => {
   return axios.get('/topic/list')
}

//获取专题详情
export let ToppicDetail = (id:string) => {
    return axios.get(`/topic/detail?id=${id}`)
}
