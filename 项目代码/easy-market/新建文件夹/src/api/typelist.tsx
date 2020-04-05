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

export let classifyDetail = (id: string) => {
   return axios.get("/goods/category", { params: { id } })
}

export let classifyDetailList = (categoryId: string, page: string = '1', size: string = '100') => {
    return axios.get("/goods/list", { params: { categoryId, page, size } })
}