import Axios from 'axios';
import { Toast } from 'antd-mobile';
const axios = Axios.create({
    baseURL: 'http://easymarket.jasonandjay.com/', //本地域名
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    Toast.info(error.toString());
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    if (response.status !== 200 || response.data.errno !== 0){
      // 做个错误提示，抛出Promise.resolve
        Toast.info(response.data.errmsg);
        return Promise.resolve();
    }else{
      return response.data.data;
    }
  }, function (error) {
    Toast.info(error.toString());
    return Promise.reject(error);
  });

export default axios;