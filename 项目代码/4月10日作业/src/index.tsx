import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/iconfont/iconfont.css';
import './assets/iconfont-my/iconfont.css'
import store from './store/index';
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
