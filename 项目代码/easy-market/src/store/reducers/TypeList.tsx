import { ActionType } from '../../utils/interface'

const initval = {
    Typelist: [],
    contentItem: {}
}

function typeListreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_TYPE':
            return {...state, Typelist: action.payload}
        case 'GET_CONTENT_LIST':
            return { ...state, contentItem: action.payload }
        default: return state
    }
}

export default (state = initval, action: ActionType) => typeListreducer(state, action) 