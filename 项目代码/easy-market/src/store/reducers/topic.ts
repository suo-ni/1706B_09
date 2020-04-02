import {ActionType} from '../../utils/interface'
const initVal = {
    list: [],
    detail:[]
}

function topicReudcer(state: any, action: ActionType){
    switch (action.type) {
        case 'TOPIC':
            return {...state,list:action.payload}
        case 'TOPIC_DETAIL':
            return {...state,detail:action.payload}
        default:
            return state;
    }
}

export default (state=initVal, action:ActionType)=>topicReudcer(state, action)   