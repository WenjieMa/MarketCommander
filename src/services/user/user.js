import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/user', params);
  },
  update(params) {
    return axios.put('/user', params);
  },
  delete(params) {
    return axios.delete('/user', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/user', {
      data: params
    });
  },
  findbyname(params) {
    return axios.get('/user/findbyname', {
      data: params
    });
  },
  findbyusernameandphone(params) {
    return axios.get('/user/findbyusernameandphone', {
      data: params
    });
  },
  updateForget(params) {
    return axios.put('/user/updateforget', params);
  }
}
