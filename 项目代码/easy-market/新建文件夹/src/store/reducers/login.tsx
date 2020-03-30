import { ActionType } from "../../utils/interface";
import { setToken } from '../../utils/index'

const initval = {
    isLogin: false
}

function loginReducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'LOGIN':
            setToken(action.payload.sessionKey)
            return {...state, isLogin: !!action.payload.sessionKey}
        
        default: return state
    }

}

export default (state=initval, action: ActionType) => loginReducer(state, action)