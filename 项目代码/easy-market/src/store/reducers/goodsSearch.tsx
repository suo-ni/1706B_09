import { ActionType } from '../../utils/interface'

const initval = {
    list: []
}

function goodsSearchreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_GOODS_SEARCH':
            return {...state, list: action.payload}
        default: return state
    }
}

export default (state = initval, action: ActionType) => goodsSearchreducer(state, action) 