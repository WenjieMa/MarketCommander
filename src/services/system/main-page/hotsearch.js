import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/hotsearch/insert', params);
  },
  update(params) {
    return axios.post('/mainpage/hotsearch/update', params);
  },
  delete(params) {
    return axios.post('/mainpage/hotsearch/delete', params);
  },
  findall(params) {
    return axios.post('/mainpage/hotsearch/findall', params);
  },
  changeeff(params) {
    return axios.post('/mainpage/hotsearch/changeeff', params);
  }
}
