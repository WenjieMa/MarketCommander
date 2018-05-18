import qs from 'qs';
import axios from 'axios';
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
  console.log(request);
  if (request.method == 'get') {
    console.log(request.data);
    request.data = qs.stringify(request.data, {
      arrayFormat: 'repeat'
    });
    console.log(request.data);
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
