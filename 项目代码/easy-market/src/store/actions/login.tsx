import { getLogin } from "../../api"


//登录
export let loginAction = (mobile: string, password: string) => {
    return async(dispatch: Function) => {
        let data: any = await getLogin(mobile, password)
        if(data) {
            console.log(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        }
    }
}