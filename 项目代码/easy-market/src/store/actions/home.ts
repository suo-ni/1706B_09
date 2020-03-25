import {getBanner, getChannel, getBrandList, getnewGoodsList, gethotGoodsList, gettopicList, } from '../../api'

let bannerAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getBanner();
        dispatch({
            type: 'GET_BANNER',
            payload: data
        })
    }
}

let channelAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getChannel();
        dispatch({
            type: 'GET_CHANNEL',
            payload: data
        })
    }
}

let brandListAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getBrandList();
        dispatch({
            type: 'GET_BRANDLIST',
            payload: data
        })
    }
}

let newGoodsListAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getnewGoodsList();
        dispatch({
            type: 'GET_NEWGOODSLIST',
            payload: data
        })
    }
}

let hotGoodsListAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await gethotGoodsList();
        dispatch({
            type: 'GET_HOTGOODSLIST',
            payload: data
        })
    }
}

let gettopicListAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await gettopicList();
        dispatch({
            type: 'GET_TOPICLIST',
            payload: data
        })
    }
}

let commonAction = ()=>{
    return {
        type: 'COMMON_ACTION',
        payload: {}
    }
}

export{
    bannerAction,
    commonAction,
    channelAction,
    brandListAction,
    newGoodsListAction,
    hotGoodsListAction,
    gettopicListAction
}