import axios from '@/app-store/axios'

export default {
  login(params) {
    return axios.post('/auth/operator/login', params);
  },
  regist(params) {
    return axios.post('/auth/operator/regist', params);
  }
}
