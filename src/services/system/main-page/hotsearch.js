import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/hotsearch', params);
  },
  update(params) {
    return axios.put('/mainpage/hotsearch', params);
  },
  changeeff(params) {
    return axios.put('/mainpage/hotsearch/eff', params);
  },
  delete(params) {
    return axios.delete('/mainpage/hotsearch', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/mainpage/hotsearch', {
      data: params
    });
  }
}
