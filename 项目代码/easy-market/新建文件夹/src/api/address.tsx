import axios from '../utils/request'

export let getAddress = () => {
    return axios.get('/address/list')
}