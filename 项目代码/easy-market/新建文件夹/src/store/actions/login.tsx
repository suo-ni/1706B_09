import { getLogin } from "../../api"


//登录
export let loginAction = (mobile: string, password: string) => {
    return async(dispatch: Function) => {
        let data = await getLogin(mobile, password)
        if(data) {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        }
    }
}