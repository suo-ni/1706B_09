import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

// 引入子reducer
import home from './reducers/home'
import Login from './reducers/login'
import topic from './reducers/topic'
import type from './reducers/type'
import goods from './reducers/goods'
import branDetail from './reducers/branDetail'
import collect from './reducers/collect';
import goodsDetail from './reducers/goodsDetail'

// 连接子reducer
let reducers = combineReducers({
    home,
    Login,
    topic,
    type,
    goods,
    branDetail,
    collect,
    goodsDetail
})

let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

export default store;  