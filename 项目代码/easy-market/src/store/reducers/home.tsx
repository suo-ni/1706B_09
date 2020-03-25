import { ActionType } from "../../utils/interface";

const initval = {
    banner: []
}

function homeReducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_BANNER':
            return {...state, ...action.payload}
        default: return state
    }

}

export default (state=initval, action: ActionType) => homeReducer(state, action)