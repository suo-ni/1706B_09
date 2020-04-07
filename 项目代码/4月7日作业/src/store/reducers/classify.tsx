import { ActionType} from '../../utils/interface'
const initVal = {
    categoryList: [],
    subCategoryList: []
}
function typeReducer(state: any, action: ActionType) {
    switch (action.type) {
        case 'GET_TYPE_LIST':
            return { ...state,categoryList: action.payload }
            case 'GET_SUB_LIST':
                return { ...state,subCategoryList: action.payload }
        default:
            return state;
    }
}
export default (state = initVal, action: ActionType) => typeReducer(state, action)
