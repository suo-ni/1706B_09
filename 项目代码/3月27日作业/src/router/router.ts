// import React from 'react';
import {PropType} from '../utils/interface'

// 引入一级路由
import LoginPage from '../views/LoginPage'  //登陆页面
import FavorPage from '../views/FavorPage'  //收藏页面
import MainPage from '../views/MainPage'    //footer页面
import GoodsDetailPage from '../views/GoodsDetailPage'  //商品详情页面

// 引入二级路由
import IndexPage from '../views/main/IndexPage'   //首页
import CartPage from '../views/main/CartPage'     //购物车
import TopicPage from '../views/main/TopicPage'   //专题
import TypePage from '../views/main/TypePage'    //分类
import MyPage from '../views/main/MyPage'     //我的


let config = {
    routes: [{
        path: '/login',
        component: LoginPage
    }, {
        path: '/favor',
        component: FavorPage
    }, {
        path: '/goodsDetail',
        component: GoodsDetailPage
    }, {
        path: '/main',
        component: MainPage,
        redirect: '/main/index',
        children: [{
            path: '/main/index',
            component: IndexPage
        },{
            path: '/main/topic',
            component: TopicPage
        },{
            path: '/main/type',
            component: TypePage
        },{
            path: '/main/cart',
            component: CartPage
        },{
            path: '/main/my',
            component: MyPage
        }]
    },{
        path: '*',
        redirect: '/main/index'
    }]
}

export default config as PropType