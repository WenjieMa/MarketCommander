import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/image', params);
  },
  update(params) {
    return axios.put('/mainpage/image', params);
  },
  delete(params) {
    return axios.delete('/mainpage/image', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/mainpage/image', {
      data: params
    });
  }
}
