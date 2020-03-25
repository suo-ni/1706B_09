import axios from '../utils/request'

export let getBanner = () => {
    return axios.get('/')
}