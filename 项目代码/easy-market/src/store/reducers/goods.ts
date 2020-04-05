import {ActionType} from '../../utils/interface'
const initVal = {
    goods:[]
}

function homeReudcer(state: any, action: ActionType){
    switch (action.type) {
        case 'GET_GOODS':
            return {...state, goods:action.payload}
        default:
            return state;
    }
}

export default (state=initVal, action:ActionType)=>homeReudcer(state, action)  