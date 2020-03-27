import axios from '../utils/request'

export let getLogin = (mobile: string, password: string) => {
    axios.post('/auth/loginByMobile', {
        mobile,
        password
    })
}