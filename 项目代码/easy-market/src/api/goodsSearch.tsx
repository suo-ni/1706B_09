import axios from '../utils/request'

export let getGoodsSearch = (keyword: string) => {
    return axios.get('/goods/list?keyword=' + keyword)
}