import { getBanner, getChannel, getNewGoodsList, getBrandList } from "../../api";

//轮播图
export let bannerAction = () => {
    return async(dispatch: Function) => {
        let data = await getBanner();
        if(data) {
            dispatch({
                type: 'GET_BANNER',
                payload: data
            })
        }
    }
}

//图标
export let channelAction = () => {
    return async(dispatch: Function) =>{
        let data = await getChannel()
        if(data) {
            dispatch({
                type: 'GET_CHANNEL',
                payload: data
            })
        }
    }
}

//品牌制造商
export let newGoodsListAction = () => {
    return async(dispatch: Function) => {
        let data = await getNewGoodsList()
        if(data) {
            dispatch({
                type: 'GET_GOODS',
                payload: data
            })
        }
    }
}

////新品首发
export let newBrandListtAction = () => {
    return async(dispatch: Function) => {
        let data = await getBrandList()
        if(data) {
            dispatch({
                type: 'GET_GOODS',
                payload: data
            })
        }
    }
}