import { getGoodsSearch } from '../../api/goodsSearch'

export let GoodsSearchAction = (keyword:string) =>{
    return async(dispatch: Function) => {
        let data = await getGoodsSearch(keyword)
        console.log(data, '搜索')
        if(data) {
            dispatch({
                type: 'GET_GOODS_SEARCH',
                payload: data
            })
        }
    }
}