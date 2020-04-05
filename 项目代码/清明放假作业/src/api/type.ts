import axios from '../utils/request'

// 专题页面渲染接口
export let getTypeList = ()=>{
    return axios.get('/catalog/index')
}
export let getSubType=(id:string)=>{
  return axios.get(`/catalog/current?id=${id}`)
}