import axios from '../utils/request'

// 专题页面渲染接口
export let getclassList = ()=>{
    return axios.get('/catalog/index')
}
export let getnavList=(id:any)=>{
  return axios.get(`/catalog/current?id=${id}`)
}