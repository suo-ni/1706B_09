import { ActionType } from '../../utils/interface'

const initVal = {
  data: []
}

function collectReducer(state: any = initVal, action: ActionType) {
  switch (action.type) {
    case 'COLLECT_LIST_ACTION':
      return { ...state, data: [...action.payload] }

    case 'REMOVE_ITEM_ACTION':
      let findInd = state.data.findIndex((item: any) => item.value_id == action.payload);
      state.data.splice(findInd, 1);
      return { ...state, data: [...state.data] }
      case 'COLLECT_GOODS':
        return { ...state, collectgoods: action.payload }
      default:
      return state
  }
}

export default collectReducer