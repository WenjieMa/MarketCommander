import axios from '@/app/axios'

export default {
  login(params) {
    return axios.get('/auth/operator/basic', {
      data: params
    });
  },
  regist(params) {
    return axios.post('/auth/operator/basic', params);
  },
  updateoper(params) {
    return axios.post('/auth/operator/updateoper', params);
  },
  userlogin(params) {
    return axios.get('/auth/user/basic', {
      data: params
    });
  },
  userRegist(params) {
    return axios.post('/auth/user/basic', params);
  }
}
