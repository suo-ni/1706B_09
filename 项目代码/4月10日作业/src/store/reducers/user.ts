import { actionType } from '../../utils/interface'

const initVal = {
  userList: {},
  upLoad: ''
}

function userInfoReducer(
  state: any = initVal, action: actionType
) {
  switch (action.type) {
    case 'GET_USERINFO_LIST':
      return { ...state, userList: { ...action.payload } }
    case 'UPLOAD_AVATAR':
      return { ...state, upLoad: action.payload }
    default:
      return state
  }
}
export default userInfoReducer;