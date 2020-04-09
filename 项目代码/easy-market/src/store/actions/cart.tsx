import { getCart, CartAdd } from '../../api/cart';

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

//添加
export let cartaddgoods = (goodsId: string, number: string,productId:string) => {
    return async (dispatch: Function) => {
      let data: any = await CartAdd(goodsId, number,productId);
      if (data) {
        dispatch({
          type: "CART_ADD",
          payload: data.data.type
        });
      }
    };
  };