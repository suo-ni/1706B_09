import { ActionType } from '../../utils/interface'

const initval = {
    list: [],
    currentList: [],
    curentImg: [],
    currentCategory: [],
    detail: {},
    detailNav: {},
    detailList:[]
}

function typeListreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_TYPE':
            return {...state,  ...action.payload}
        case 'GET_TAB_LIST':
            return { ...state, currentCategory: action.payload.currentCategory };
        case 'GET_TYPE_DETAIL':
            return {...state, detail: action.payload.currentCategory}
        case 'GET_CLASSIFYDETAIL_LIST':
            return { ...state, detailNav: { ...action.payload } }
        case 'GET_DETAILLIST_LIST':
            return { ...state, detailList: [...action.payload] }
        default: return state
    }
}

export default (state = initval, action: ActionType) => typeListreducer(state, action) 