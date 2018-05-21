import axios from 'axios';
import qs from 'qs';
import config from './configs/system-config';

const instance = axios.create();

instance.defaults.timeout = 15000; // 响应时间
instance.defaults.headers.post['Content-Type'] = 'application/json'; // 配置请求头
instance.defaults.baseURL = config.service.host; // 配置接口地址 具体地址为马文杰的腾讯云服务器地址
// instance.defaults.withCredentials = true;

/**
 * 过滤空参数
 */
instance.interceptors.request.use(function (request) {
  if (request.data == undefined) {
    request.data = '{}';
  }
  if (request.method == 'get') {
    console.log('我的url是' + request.url);
    if (request.url !== undefined) {
      request.url = request.url + '?' + qs.stringify(request.data);
    } else {
      request.url = '';
    }

    console.log(request);
  } else if (request.method == 'post') {
    console.log(request);
  } else if (request.method == 'put') {
    console.log(request);
  } else if (request.method == 'delete') {
    request.url = request.url + '?' + qs.stringify(request.data);
    console.log(request);
  }
  return request
})

/**
 * 错误统一处理
 */
instance.interceptors.response.use(response => {
  if (response.data.ok || response.data.code === 0) {
    return response.data;
  }
  const err = new Error(response.data.errMsg);
  err.response = response;
  return Promise.reject(err);
}, error => {
  return Promise.reject(error);
});

export default instance;
