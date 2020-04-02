// import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';


import home from './reducers/home';
import login from './reducers/login'
import topic from './reducers/topic'
import classify from './reducers/classify'
//连接reducer
let reducers = combineReducers({
  home,
  login,
  topic,
  classify
})

let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))
export default store;
