import axios from '../utils/request'

export let getCollectList = (typeId = "0") => axios.get("/collect/list", { params: { typeId } })

//添加收藏
export let CollectGoods = (typeId: string, valueId: string) => {
    return axios({
        url: `/collect/addordelete`,
        data: {
            typeId,
            valueId,
        },
        method: "post",
    });
};

export let addorremove = (valueId: string, typeId: string) => axios.post("/collect/addordelete", { typeId, valueId })
