import axios from '../utils/request'

export let getGoodsDetail = (id: string) => {
    return axios.get(`/goods/detail?id=${id}`)
}