import { ActionType } from "../../utils/interface"

const initval= {
    list: [],
    detail: {}
}

function topicreducer(state: any, action: ActionType) {
    switch(action.type) {
        case 'GET_TOPIC':
            return {...state, list: action.payload};
        case 'GET_TOPIC_DETAIL':
            return {...state, detail: action.payload}
        default: return state
    }
}

export default (state = initval, action: ActionType) => topicreducer(state, action) 