import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/anounce/insert', params);
  },
  update(params) {
    return axios.post('/mainpage/anounce/update', params);
  },
  delete(params) {
    return axios.post('/mainpage/anounce/delete', params);
  },
  findall(params) {
    return axios.post('/mainpage/anounce/findall', params);
  },
  changeeff(params) {
    return axios.post('/mainpage/anounce/changeeff', params);
  }
}
