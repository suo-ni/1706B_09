import { tabType } from '../../utils/interface'
const initVal = {
    list: {},
    currentList: [],
    curentImg: [],
    currentCategory: []
}
function classReducer(state: any, action: tabType) {
    switch (action.type) {
        case 'GET_CLASS_LIST':
            return { ...state,...action.payload }
            case 'GET_NAV_LIST':
                return { ...state,...action.payload }
        default:
            return state;
    }
}
export default (state = initVal, action: tabType) => classReducer(state, action)
