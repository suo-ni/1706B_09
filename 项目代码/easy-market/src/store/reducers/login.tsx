import { ActionType } from "../../utils/interface";

const initval = {
    isLogin: false
}

function loginReducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'LOGIN':
            return {...state, isLogin: !!action.payload.sessionKey}
        
        default: return state
    }

}

export default (state=initval, action: ActionType) => loginReducer(state, action)