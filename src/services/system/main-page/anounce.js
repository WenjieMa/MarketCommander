import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/anounce', params);
  },
  update(params) {
    return axios.put('/mainpage/anounce', params);
  },
  delete(params) {
    return axios.delete('/mainpage/anounce', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/mainpage/anounce', {
      data: params
    });
  },
  changeeff(params) {
    return axios.put('/mainpage/anounce/eff', params);
  }
}
