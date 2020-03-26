import React from "react"
import ReduxLogger from "redux-logger"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from "redux-thunk"

import home from './reducers/home'
import login from './reducers/login'

let reducers = combineReducers({
    home,
    login
})


let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

export default store
