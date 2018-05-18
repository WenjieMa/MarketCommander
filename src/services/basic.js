import axios from '@/app/axios'

export default {
  login(params) {
    return axios.post('/auth/operator/login', params);
  },
  regist(params) {
    return axios.post('/auth/operator/regist', params);
  },
  userlogin(params) {
    return axios.post('/auth/user/login', params);
  },
  userRegist(params) {
    return axios.post('/auth/user/regist', params);
  }
}
