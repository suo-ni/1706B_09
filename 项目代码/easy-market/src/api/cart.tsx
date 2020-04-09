import axios from '../utils/request'

export let getCart = () => {
    return axios.get('/cart/index')
}

//添加
export let CartAdd = (goodsId: string, number: string,productId:string) => {
    return axios({
      url: `/cart/add`,
      data: {
        goodsId,
        number,
        productId
      },
      method: "post",
    });
  };