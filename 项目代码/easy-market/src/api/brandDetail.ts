// /brand/detail
import axios from '../utils/request'

export let getbranDetail = (id:any)=>{
    return axios.get(`/brand/detail?id=${id}`)
    
}  