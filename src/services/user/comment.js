import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/comment/obj', params);
  },
  update(params) {
    return axios.put('/comment/obj', params);
  },
  delete(params) {
    return axios.delete('/comment/obj', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/comment/findall', {
      data: params
    });
  },
  finditemcommentsum(params) {
    return axios.post('/comment/obj/finditemcommentsum', params);
  },
  findcommentbyitemid(params) {
    return axios.get('/comment/obj/findcommentbyitemid', {
      data: params
    });
  },
  reply(params) {
    return axios.post('/comment/obj/reply', params);
  }
}
