import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入路由
import { HashRouter } from 'react-router-dom'
import config from './router/router'
import RouterView from './router/RouterView'
// 引入redux
import store from './store'
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import './fonts/iconfont.css' 


ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <RouterView routes={config.routes} />
            </HashRouter>
        </Provider>, 
        document.getElementById('root')
);