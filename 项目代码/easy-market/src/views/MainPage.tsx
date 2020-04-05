import React from 'react'
import { PropType, RouterItemType } from '../utils/interface'
import { NavLink } from 'react-router-dom'
import RouterView from '../router/RouterView'


let MainPage: React.FC<PropType> = props => {

    return <>

        <div className="main_home">
            <RouterView routes={props.routes} />

        </div>
        <footer className="main_footer">
            <div className="tabItem">
                <i className="iconfont icon-shouye"></i>
                <NavLink to="/main/index">首页</NavLink>
            </div>
            <div className="tabItem">
                <i className="iconfont icon-zhuantibluecopy"></i>
                <NavLink to="/main/topic">专题</NavLink>
            </div>
            <div className="tabItem">
                <i className="iconfont icon-leimupinleifenleileibie--"></i>
                <NavLink to="/main/type">分类</NavLink>
            </div>
            <div className="tabItem">
                <i  className="iconfont icon-icon-test"></i>
                <NavLink to="/main/cart">购物车</NavLink>
            </div>
            <div className="tabItem">
                <i className="iconfont icon-wode"></i>
                <NavLink to="/main/my">我的</NavLink>
            </div>
            
        </footer>

    </>
}

export default MainPage;