import { ActionType } from '../../utils/interface'
const initVal = {
    typelist: [],
    currentCategory: [],
    detailNav: {},
    detailList: []
}

function typeReudcer(state: any, action: ActionType) {
    switch (action.type) {
        case 'TYPE':
            return { ...state, ...action.payload }
        case 'GET_TAB_LIST':
            return { ...state, currentCategory: action.payload.currentCategory };
        case 'GET_CLASSIFYDETAIL_LIST':
            return { ...state, detailNav: { ...action.payload } }

        case 'GET_DETAILLIST_LIST':
            return { ...state, detailList: [...action.payload] }
        default:
            return state;
    }
}

export default (state = initVal, action: ActionType) => typeReudcer(state, action)   