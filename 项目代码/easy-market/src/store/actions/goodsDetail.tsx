import { getGoodsDetail } from '../../api/goodsDetail'

export let GoodsDetailAction = (id: string) => {
    return async(dispatch: Function) => {
        let data = await getGoodsDetail(id)
        console.log(data)
        if(data) {
            dispatch({
                type: 'GET_GOODS_DETAIL',
                payload: data
            })
        }
    }
}