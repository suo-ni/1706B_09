// import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';


import home from './reducers/home';
import login from './reducers/login'
import topic from './reducers/topic'
import classify from './reducers/classify'
import subjectDetail from './reducers/subjectDetail'
import collect from './reducers/collect';
import user from './reducers/user'
//连接reducer
let reducers = combineReducers({
  home,
  login,
  topic,
  classify,
  subjectDetail,
  collect,
  user
})

let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))
export default store;
