import {ActionType} from '../../utils/interface'
const initVal = {
    typelist: [],
    currentList: [],
    curentImg: [],
    currentCategory: [],
    typeDetail: {}
}

function typeReudcer(state: any, action: ActionType){
    switch (action.type) {
        case 'TYPE':
            return {...state, ...action.payload}
        case 'GET_TAB_LIST':
            return { ...state, currentCategory: action.payload.currentCategory };
        case 'GET_TYPEDETAIL':
            return {...state, typeDetail: action.payload.currentCategory}
        default:
            return state;
    }
}

export default (state=initVal, action:ActionType)=>typeReudcer(state, action)   