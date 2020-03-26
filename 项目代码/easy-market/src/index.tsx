import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store'
import { Provider } from 'react-redux'
import {HashRouter} from 'react-router-dom'
import config from './router/router'
import RouterView from './router/RouterView'
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<Provider store={store}> <HashRouter>
    <RouterView routes={config.routes}/>
</HashRouter></Provider>, document.getElementById('root'));