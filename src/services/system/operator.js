import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/operator', params);
  },
  update(params) {
    return axios.put('/operator', params);
  },
  delete(params) {
    return axios.delete('/operator', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/operator', {
      data: params
    });
  },
  findbyname(params) {
    return axios.get('/operator/findbyname', {
      data: params
    });
  },
  findbyusernameandphone(params) {
    return axios.get('/operator/findbyusernameandphone', {
      data: params
    });
  },
  updateForget(params) {
    return axios.put('/operator/updateforget', params);
  }
}
