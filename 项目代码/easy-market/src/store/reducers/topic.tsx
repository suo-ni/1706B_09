import { ActionType } from "../../utils/interface"

const initval= {
    Topic: []
}

function topicreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'TOPIC':
            return {...state, ...action.payload}
        default: return state
    }
}

export default (state = initval, action: ActionType) => topicreducer(state, action)