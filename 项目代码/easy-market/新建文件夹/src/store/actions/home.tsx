import { getBanner, getChannel, getNewGoodsList, getBrandList, gethotGoodsList, getcategoryList, gettopicList, getgoodsList } from "../../api/home";


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

//新品首发
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

//人气推荐
export let hotGoodsListAction = () => {
    return async(dispatch: Function) => {
        let data = await gethotGoodsList()
        if(data) {
            dispatch({
                type: 'GET_HOTGOODS',
                payload: data
            })
        }
    }
}

//专题精选
export let topicListAction = () => {
    return async(dispatch: Function) => {
        let data = await gettopicList() 
            if(data) {
                dispatch({
                    type: 'GET_TOPIC',
                    payload: data
                })
            }
    }
}

//居家
export let categoryListAction = () => {
    return async(dispatch: Function) => {
        let data = await getcategoryList()
        if(data) {
            dispatch({
                type: 'GET_CAT',
                payload: data
            })
        }
    }
}

//居家餐厨什么的
export let goodsListAction = () => {
    return async(dispatch: Function) => {
        let data = await getgoodsList()
        if(data) {
            dispatch({
                type: 'GET_GOODS',
                payload: data
            })
        }
    }
}