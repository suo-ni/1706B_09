import axios from '../utils/request'

//分类列表tab
export let TypeList = () => {
    return axios.get('/catalog/index')
}

export let getTab = (id: any) => {
    return axios.get(`/catalog/current?id=${id}`);
};