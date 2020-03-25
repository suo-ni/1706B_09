import React from "react"
import ReduxLogger from "redux-logger"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from "redux-thunk"

import home from './reducers/home'

let reducers = combineReducers({
    home
})


let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

export default store
