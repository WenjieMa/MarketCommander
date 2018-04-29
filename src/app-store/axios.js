import qs from 'qs';
import axios from 'axios';
import config from './configs/system-config';

const instance = axios.create();

instance.defaults.timeout = 15000; // 响应时间
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头
instance.defaults.baseURL = config.service.host; // 配置接口地址 具体地址为马文杰的腾讯云服务器地址
// instance.defaults.withCredentials = true;

/**
 * 过滤空参数
 */
instance.defaults.paramsSerializer = function(params) {
  const keys = Object.keys(params);
  const _ret = {};
  for (const key of keys) {
    if (typeof params[key] === 'undefined' || params[key] === null || params[key] === '') {
      continue;
    } else {
      _ret[key] = params[key];
    }
  }
  return qs.stringify(_ret);
};

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
