import React, { useState } from 'react'
import { Toast } from 'antd-mobile'
import { mobileReg, passwordReg } from '../utils/regexp'
import { connect } from 'react-redux'
import { loginAction } from '../store/actions/login'
import { RouteComponentProps } from 'react-router'

interface StateType {
    isLogin: boolean
}
interface DispatchType {
    login: (mobile: string, password: string) => void
}

let LoginPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {

    let [mobile, setMobile] = useState<string>('15323807318')
    let [password, setPassword] = useState<string>('123456')

    // 如果用户已经登陆，回到上一个页面
    if (props.isLogin) {
        let redirect = props.location.search.slice(1).split('=')[1]
        props.history.replace(redirect ? decodeURIComponent(redirect) : '/')
        return null;
    }

    let changeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobile(e.target.value);
    }

    let changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    let login = () => {
        if (!mobileReg.test(mobile!)) {
            Toast.info('请输入正确的手机号码');
            return;
        }
        if (!passwordReg.test(password!)) {
            Toast.info('请输入正确的密码');
            return;
        }
        props.login(mobile, password);
        console.log(props.login);
    }

    return <div className="login">
        <input type="text" value={mobile} placeholder="请输入你的手机号码" onChange={changeMobile} /><br/><br/>
        <input type="password" value={password} placeholder="请输入你的密码" onChange={changePassword} /><br/><br/>
        <button onClick={login}>登陆</button>
    </div>;


}

const mapStateToProps = (state: any) => {
    return {
        isLogin: state.Login.isLogin
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        login: (mobile: string, password: string) => {
            dispatch(loginAction(mobile, password))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);