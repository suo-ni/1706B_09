import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { mobileReg, passwordReg } from '../utils/regexp'
import { Toast } from 'antd-mobile'
import { loginAction } from '../store/actions/login'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router';

interface StateType {
    isLogin: boolean
}

interface DispatchType {
    getLogin: (mobile: string, password: string) => void
}

let LoginlPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    let [mobile, setMobile] = useState<string>('')
    let [password, setPassword] = useState<string>('')

    if (props.isLogin){
        let redirect = props.location.search.slice(1).split('=')[1]
        props.history.replace(redirect?decodeURIComponent(redirect): '/')
        return null;
        // props.history.push('/')
    }   


    //用户名
    let changeMobile = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMobile(e.target.value)
    }
    //密码
    let changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }
    //登录发送接口
    let login = () => {
        if(!mobileReg.test(mobile!)) {
            Toast.info('用户名格式错误');
            return
        } if(!passwordReg.test(password!)) {
            Toast.info('密码格式错误')
            return
        }
        props.getLogin(mobile, password)
        
    }
    return <>
        <div className="logo">
            <img src="./static/media/logo.f51ce87b.jpg" alt=""/>
        </div>
        <Input value={mobile} onChange={changeMobile} size="large" placeholder="请输入用户名" />
        <Input.Password value={password} onChange={changePassword} size="large" placeholder="请输入密码" />
        <Button onClick={login} type="primary" block>
            登录
        </Button>
    </>
}

const mapStateToProps = (state: any) => {
    return {isLogin: state.login.isLogin}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getLogin: (mobile: string, password: string) => {
            dispatch(loginAction(mobile, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginlPage);