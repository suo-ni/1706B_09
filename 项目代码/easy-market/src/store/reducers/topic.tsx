import { ActionType } from "../../utils/interface"

const initval= {
    list: []
}

function topicreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_TOPIC':
            return {...state, list: action.payload} 
        default: return state
    }
}

export default (state = initval, action: ActionType) => topicreducer(state, action) 