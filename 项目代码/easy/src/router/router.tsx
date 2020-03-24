import React, { Children } from 'react'
import { PropType } from '../utils/interface'

import LoginPage from '../view/LoginPage'
import FavorPage from '../view/FavorPage'
import MainPage from '../view/MainPage'
import GoodsDetailPage from '../view/GoodsDetailPage'

//二级
import IndexPage from '../view/main/IndexPage';
import CartPage from '../view/main/CartPage'
import MyPage from '../view/main/MyPage';
import TopicPage from '../view/main/TopicPage'
import TypePage from '../view/main/TypePage';

let config = {
    routes: [
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/favor',
            component: FavorPage
        },
        {
            path: '/goodsdetail',
            component: GoodsDetailPage
        },
        {
            path: '/main',
            component: MainPage,
            redirect: '/main/index',
            Children: [
                {
                    path: '/main/index',
                    component: IndexPage
                },
                {
                    path: '/main/cart',
                    component: CartPage
                },
                {
                    path: '/main/my',
                    component: MyPage
                },
                {
                    path: '/main/topic',
                    component: TopicPage
                },
                {
                    path: '/main/type',
                    component: TypePage
                }
            ]
        },
        {
            path: '*',
            redirect: '/main/index'
        }
    ]
}

export default config as PropType
