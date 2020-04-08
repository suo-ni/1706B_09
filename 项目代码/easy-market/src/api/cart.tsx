import axios from '../utils/request'

export let getCart = () => {
    return axios.get('/cart/index')
}