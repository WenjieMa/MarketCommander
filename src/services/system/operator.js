import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/operator/insert', params);
  },
  update(params) {
    return axios.post('/operator/update', params);
  },
  delete(params) {
    return axios.post('/operator/delete', params);
  },
  findall(params) {
    return axios.post('/operator/findall', params);
  },
  findbyname(params) {
    return axios.post('/operator/findbyname', params);
  },
  findbyusernameandphone(params) {
    return axios.post('/operator/findbyusernameandphone', params);
  },
  updateForget(params) {
    return axios.post('/operator/updateforget', params);
  }
}
