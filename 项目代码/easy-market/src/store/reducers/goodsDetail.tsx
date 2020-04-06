import { ActionType } from '../../utils/interface'

const initval = {
    detail: {}
}

function goodsDetailreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_GOODS_DETAIL':
            return {...state, detail: action.payload}
        default: return state
    }
}

export default (state = initval, action: ActionType) => goodsDetailreducer(state, action) 