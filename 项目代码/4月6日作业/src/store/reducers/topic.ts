import {ActionType} from '../../utils/interface'
const initVal = {
    list:{},
    detail:{}
}

function topicReducer(state: any, action: ActionType){
    switch (action.type) {
        case 'GET_TOPIC_LIST':
            return {...state, list:action.payload};
        case 'GET_TOPIC_DETAIL':
            return {...state,detail:action.payload};
        default:
            return state;
    }
}
export default (state=initVal, action:ActionType)=>topicReducer(state, action)