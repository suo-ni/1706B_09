import { ActionType } from '../../utils/interface'

const initval = {
    data: []
}

function addressreducer(state:any, action: ActionType) {
    switch(action.type) {
        case 'GET_ADDRESS':
            return {...state, data: [...action.payload]}
        default: return state
    }
}

export default (state = initval, action: ActionType) => addressreducer(state, action)