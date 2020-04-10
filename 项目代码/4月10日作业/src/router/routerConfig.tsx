import { routerConfigType } from '../utils/interface'

// 引入一级路由
import Login from '../views/Login'
import BannerDetail from '../views/BannerDetail'
import Categorys from '../views/Categorys'
import Collect from '../views/Collect'
import Goods from '../views/Goods'
import Search from '../views/Search'
import SubjectDetail from '../views/SubjectDetail'
import Address from '../views/Address'
import Home from '../views/Home'

// 引入二级路由
import Index from '../views/main/Index'
import My from '../views/main/My'
import Classify from '../views/main/Classify'
import Cart from '../views/main/Cart'
import Subject from '../views/main/Subject'


let config = {
  routers: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/index",
          component: Index
        }, {
          path: "/home/my",
          component: My
        }, {
          path: "/home/classify",
          component: Classify
        }, {
          path: "/home/cart",
          component: Cart
        }, {
          path: "/home/subject",
          component: Subject,
        },{
          path:"/home",
          to:"/home/index"
        }
      ]
    },
    {
      path: "/address",
      component: Address
    },
    {
      path: "/bannerDetail/:id",
      component: BannerDetail
    },
    {
      path: "/categorys/:id",
      component: Categorys
    },
    {
      path: "/collect",
      component: Collect
    },
    {
      path: "/goods/:id",
      component: Goods
    },
    { 
      path: "/subjectDetail/:id",
      component: SubjectDetail
  },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/",
      to: "/home"
    }
  ]
}

export default config as routerConfigType
