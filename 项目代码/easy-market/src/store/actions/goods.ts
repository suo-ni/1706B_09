import { getGoods } from '../../api'

export let goodsAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getGoods();
        console.log(data)
        dispatch({
            type: 'GET_GOODS',
            payload: data.hotKeywordList
        })
    }
}