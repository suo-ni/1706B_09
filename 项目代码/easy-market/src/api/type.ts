import axios from '../utils/request'

export let gettypeList = ()=>{
    return axios.get('/catalog/index')
}   

export let getTab = (id: any) => {
    return axios.get(`/catalog/current?id=${id}`);
};


export let getTypeDetail = (id: string) => {
    return axios.get(`/catalog/current?id=${id}`);
};