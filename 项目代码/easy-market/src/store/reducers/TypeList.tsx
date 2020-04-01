import { ActionType } from '../../utils/interface'

const initval = {
    list: [],
    currentList: [],
    curentImg: [],
    currentCategory: [],
}

function typeListreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_TYPE':
            return {...state,  ...action.payload}
        case 'GET_TAB_LIST':
            return { ...state, currentCategory: action.payload.currentCategory };
        default: return state
    }
}

export default (state = initval, action: ActionType) => typeListreducer(state, action) 