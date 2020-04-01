import axios from '../utils/request'

//专题
export let Topic = () => {
   return axios.get('/topic/list')
}
