import { login ,getUserInfo} from '../../api/user'

export let loginAction = (mobile: string, password: string) => {
  return async (dispatch: Function) => {
    let data = await login(mobile, password);
    if (data) {
      console.log('data...', data);
      dispatch({
        type: 'LOGIN',
        payload: data.data
      })
    }
  }
}

export let logoutAction = () => {
  return ({
    type: 'LOGOUT'
  })
}

export let userInfoAction=()=>{
  return async (dispatch: Function) => {
    let data = await getUserInfo();
    if (data) {
      console.log('data...', data);
      // dispatch({
      //   type: 'LOGIN',
      //   payload: data.data
      // })
    }
  }
}