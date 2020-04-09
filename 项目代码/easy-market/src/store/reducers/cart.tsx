import { ActionType } from '../../utils/interface'

const initVal = {
  data: [],
  cartaddtype:"",
  product: []
}

function CartReducer(state: any = initVal, action: ActionType) {
  switch (action.type) {
    case 'GET_CART':
      return { ...state, data: action.payload }
    case 'CART_ADD':
      return {...state, cartaddtype: action.payload}
    default:
      return state
  }
}

export default CartReducer