import axios from '../utils/request'

export let getGoodsSearch = () => {
    return axios.get('/search/helper')
}