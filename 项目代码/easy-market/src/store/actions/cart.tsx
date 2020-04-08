import { getCart } from '../../api/cart';

export let CartAction = () => {
    return async(dispatch: Function) => {
        let data = await getCart()
        console.log(data)
        if(data) {
            dispatch({
                type: 'GET_CART',
                payload: data
            })
        }
    }
}