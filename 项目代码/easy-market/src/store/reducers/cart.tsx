import { ActionType } from '../../utils/interface'

const initVal = {
  data: []
}

function CartReducer(state: any = initVal, action: ActionType) {
  switch (action.type) {
    case 'GET_CART':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default CartReducer