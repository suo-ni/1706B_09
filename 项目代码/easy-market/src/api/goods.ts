import axios from '../utils/request'

export let getGoods = ()=>{
    return axios.get('/search/index')
}