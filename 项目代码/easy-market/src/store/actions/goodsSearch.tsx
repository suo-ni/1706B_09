import { getGoodsSearch } from '../../api/goodsSearch'

export let GoodsSearchAction = () =>{
    return async(dispatch: Function) => {
        let data = await getGoodsSearch()
        console.log(data, '搜索')
        if(data) {
            dispatch({
                type: 'GET_GOODS_SEARCH',
                payload: data
            })
        }
    }
}