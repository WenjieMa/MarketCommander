import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/mainpage/image/insert', params);
  },
  update(params) {
    return axios.post('/mainpage/image/update', params);
  },
  delete(params) {
    return axios.post('/mainpage/image/delete', params);
  },
  findall(params) {
    return axios.post('/mainpage/image/findall', params);
  }
}
