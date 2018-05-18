import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/collection/insert', params);
  },
  update(params) {
    return axios.post('/collection/update', params);
  },
  delete(params) {
    return axios.post('/collection/delete', params);
  },
  findall(params) {
    return axios.post('/collection/findall', params);
  }
}
