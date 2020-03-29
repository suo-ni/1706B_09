import { ActionType } from "../../utils/interface";

const initval = {
    banner: [],
    channel: [],
    newGoodsList: [],
    getBrandList: [],
    gethotGoodsList: [],
    gettopicList: [],
    getcategoryList: [],
    getgoodsList: []
}

function homeReducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_BANNER':
            return {...state, ...action.payload}
        case 'GET_CHANNNEL':
            return {...state, ...action.payload}
        case 'GET_GOODS':
            return {...state, ...action.payload}
        case 'GET_HOTGOODS':
            return {...state, ...action.payload}
        case 'GET_TOPIC':
            return {...state, ...action.payload}
        case 'GET_CAT':
            return {...state, ...action.payload}    
        case 'GET_GOODS':
            return {...state, ...action.payload}
        default: return state
    }

}

export default (state=initval, action: ActionType) => homeReducer(state, action)