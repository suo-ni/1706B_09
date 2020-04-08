import { ActionType } from '../../utils/interface'

const initval = {
    keyword: []
}

function goodsSearchreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_GOODS_SEARCH':
            return {...state, keyword: action.payload.data}
        default: return state
    }
}

export default (state = initval, action: ActionType) => goodsSearchreducer(state, action) 