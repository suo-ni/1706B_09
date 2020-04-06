import { PropType } from '../utils/interface'

// 引入一级路由
import LoginPage from '../views/LoginPage'
import FavorPage from '../views/FavorPage'
import MainPage from '../views/MainPage'
import GoodsDetailPage from '../views/GoodsDetailPage'
import TopicDetailPage from '../views/TopicDetailPage'
import categorys from '../views/categorys'
import Address from '../views/AddressPage'
import BrandDetail from '../views/BrandDetailPage'
import Collect from '../views/collect'

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
    }, {
        path: '/goods/:id',
        component: FavorPage
    }, {
        path: '/goodsDetail',
        component: GoodsDetailPage
    }, {
        path: '/topicDetail/:id',
        component: TopicDetailPage
    },{
        path: '/brandDetail/:id',
        component: BrandDetail
    },{
        path:"/typeDetail/:id",
        component:categorys
    },{
        path:"/address",
        component:Address
    },{
        path: "/collect",
        component: Collect
      }, {
        path: '/main',
        component: MainPage,
        redirect: '/main/index',
        children: [{
            path: '/main/index',
            component: IndexPage
        }, {
            path: '/main/topic',
            component: TopicPage
        }, {
            path: '/main/type',
            component: TypePage
        }, {
            path: '/main/cart',
            component: CartPage
        }, {
            path: '/main/my',
            component: MyPage
        }]
    },
    {
        path: '*',
        redirect: '/main/index'
    }
]
}

export default config as PropType