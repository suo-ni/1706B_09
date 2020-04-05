import {ActionType} from '../../utils/interface'
const initVal = {
    branDetail: {}
}

function topicReudcer(state: any, action: ActionType){
    switch (action.type) {
        case 'BRANDETAIL':
            return {...state,branDetail:action.payload.brand}
        default:
            return state;
    }
}

export default (state=initVal, action:ActionType)=>topicReudcer(state, action)   