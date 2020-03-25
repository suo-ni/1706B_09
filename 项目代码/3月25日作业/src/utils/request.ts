import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://easymarket.jasonandjay.com/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status != 200 || response.data.errno != 0){
      // 做个错误提示，抛出Promise.resolve
    }else{
      return response.data.data;
    }
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axios;