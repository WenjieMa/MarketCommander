import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/comment/insert', params);
  },
  update(params) {
    return axios.post('/comment/update', params);
  },
  delete(params) {
    return axios.post('/comment/delete', params);
  },
  findall(params) {
    return axios.post('/comment/findall', params);
  },
  finditemcommentsum(params) {
    return axios.post('/comment/finditemcommentsum', params);
  },
  findcommentbyitemid(params) {
    return axios.post('/comment/findcommentbyitemid', params);
  },
  reply(params) {
    return axios.post('/comment/reply', params);
  }
}
