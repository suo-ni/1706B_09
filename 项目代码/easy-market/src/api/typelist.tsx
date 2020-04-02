import axios from '../utils/request'

//分类列表tab
export let TypeList = () => {
    return axios.get('/catalog/index')
}

export let getTab = (id: any) => {
    return axios.get(`/catalog/current?id=${id}`);
};

//分类详情
export let TypeDetail = (id: string) => {
    return axios.get(`/catalog/current?id=${id}`)
}