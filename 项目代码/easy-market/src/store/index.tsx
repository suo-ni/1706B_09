import React from "react"
import ReduxLogger from "redux-logger"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from "redux-thunk"

//首页
import home from './reducers/home'
//登录
import login from './reducers/login'
//专题精选
import topic from './reducers/topic'
//分类tab
import TypeList from './reducers/TypeList'
//地址管理
import address from './reducers/address'
//收藏
import favor from './reducers/favor'
//商品详情
import goodsDetail from './reducers/goodsDetail'
let reducers = combineReducers({
    home,
    login,
    topic,
    TypeList,
    address,
    favor,
    goodsDetail
})


let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

export default store
