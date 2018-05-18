import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/user/insert', params);
  },
  update(params) {
    return axios.post('/user/update', params);
  },
  delete(params) {
    return axios.post('/user/delete', params);
  },
  findall(params) {
    return axios.post('/user/findall', params);
  },
  findbyname(params) {
    return axios.post('/user/findbyname', params);
  },
  findbyusernameandphone(params) {
    return axios.post('/user/findbyusernameandphone', params);
  },
  updateForget(params) {
    return axios.post('/user/updateforget', params);
  }
}
