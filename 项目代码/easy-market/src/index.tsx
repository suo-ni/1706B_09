import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store'
import { Provider } from 'react-redux'
import {HashRouter} from 'react-router-dom'
import config from './router/router'
import RouterView from './router/RouterView'

ReactDOM.render(<Provider store={store}> <HashRouter>
    <RouterView routes={config.routes}/>
</HashRouter></Provider>, document.getElementById('root'));