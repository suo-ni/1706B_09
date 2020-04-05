import React from 'react'
import RouterView from '../router/RouterView'
import { PropType, RouterItemType } from '../utils/interface'
import {NavLink} from 'react-router-dom'

let MainPage: React.FC<PropType> = props=>{
    return <>
        <div className="main">
            <RouterView routes={props.routes}/>
        </div>
        <footer className="footer">
            <NavLink to="/main/index">
                <div className='itemIcon'>
                    <i className="iconfont icon-shouye"></i>
                </div>
                <div className='itemName'>首页</div>
            </NavLink>
            <NavLink to="/main/topic">
                <div className='itemIcon'>
                    <i className="iconfont icon-fuzhi"></i>
                </div>
                <div className='itemName'>专题</div>
            </NavLink>
            <NavLink to="/main/type">
                <div className='itemIcon'>
                    <i className="iconfont icon-gongzuo"></i>
                </div>
                <div className='itemName'>分类</div>
            </NavLink>
            <NavLink to="/main/cart">
                <div className='itemIcon'>
                    <i className="iconfont icon-gouwuche"></i>
                </div>
                <div className='itemName'>购物车</div>
            </NavLink>
            <NavLink to="/main/my">
                <div className='itemIcon'>
                    <i className="iconfont icon-wode"></i>
                </div>
                <div className='itemName'>我的</div>
            </NavLink>
        </footer>
    </>
}

export default MainPage;     