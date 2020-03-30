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

let reducers = combineReducers({
    home,
    login,
    topic
})


let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

export default store
