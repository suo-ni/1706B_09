import React from 'react';
import {PropType} from '../utils/interface'

// 引入一级路由
import LoginPage from '../views/LoginPage'
import FavorPage from '../views/FavorPage'
import MainPage from '../views/MainPage'
import GoodsDetailPage from '../views/GoodsDetailPage'
import TopicDetailPage from '../views/TopicDetailPage'
import BrandDetailPage from '../views/BrandDetailPage'
import AddressPage from '../views/AddressPage'
import NewAddress from '../views/NewAddressPage'
import GoodsSearchPage from '../views/GoodsSearchPage'


// 引入二级路由
import IndexPage from '../views/main/IndexPage'
import CartPage from '../views/main/CartPage'
import TopicPage from '../views/main/TopicPage'
import TypePage from '../views/main/TypePage'
import MyPage from '../views/main/MyPage'


let config = {
    routes: [{
        path: '/login',
        component: LoginPage
    },
    {
        path: '/address',
        component: AddressPage
    },
    {
        path: '/favor',
        component: FavorPage
    }, {
        path: '/goodsDetail/:id',
        component: GoodsDetailPage
    },
    {
        path: '/topicdetail/:id',
        component: TopicDetailPage
    },
    {
        path: '/branddetail/:id',
        component: BrandDetailPage
    },
    {
        path: '/goodssearch',
        component:GoodsSearchPage
    },
    {
        path: '/addaddress',
        component: NewAddress
    },
     {
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
    }
        // {
        //     path: '*',
        //     redirect: '/main/index'
        // }
    ]
}

export default config as PropType