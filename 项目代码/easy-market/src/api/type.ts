import axios from '../utils/request'

export let gettypeList = ()=>{
    return axios.get('/catalog/index')
}   