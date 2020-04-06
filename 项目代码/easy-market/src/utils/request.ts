import Axios from 'axios';
import { Toast } from 'antd-mobile';
import {getToken} from './index'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

axios.interceptors.request.use(function (config) {
    if (getToken()){
      config.headers['x-nideshop-token'] = getToken();
    }
    return config;
  }, function (error) {
    
    return Promise.resolve();
  });
 
axios.interceptors.response.use(function (response) {
  
  return response.data.data;

  }, function (error) {

    return Promise.resolve();
  });

export default axios;