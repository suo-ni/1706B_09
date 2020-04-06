import axios from '../utils/request'

export let getCollectList = (typeId = "0") => {
    return axios.get("/collect/list", { params: { typeId } })
}

export let addorremove = (valueId: string, typeId: string) => {
    return axios.post("/collect/addordelete", { typeId, valueId })
}
