import {ActionType} from '../../utils/interface'
const initVal = {
    typelist: []
}

function typeReudcer(state: any, action: ActionType){
    switch (action.type) {
        case 'TYPE':
            return {...state,typelist:action.payload}
        default:
            return state;
    }
}

export default (state=initVal, action:ActionType)=>typeReudcer(state, action)   