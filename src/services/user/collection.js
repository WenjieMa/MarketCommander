import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/collection/obj', params);
  },
  delete(params) {
    return axios.post('/collection/delete', params);
  },
  deletefromitem(params) {
    return axios.delete('/collection/obj', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/collection/obj', {
      data: params
    });
  },
  findbyuseridanditemid(params) {
    return axios.get('/collection/obj/findbyuseridanditemid', {
      data: params
    });
  }
}
