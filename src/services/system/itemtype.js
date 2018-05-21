import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/itemtype/obj', params);
  },
  update(params) {
    return axios.put('/itemtype/obj', params);
  },
  delete(params) {
    return axios.delete('/itemtype/obj', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/itemtype/obj', {
      data: params
    });
  },
  findbyname(params) {
    return axios.get('/itemtype/obj/allbyname', {
      data: params
    });
  }
}
