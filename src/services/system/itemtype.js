import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/itemtype/insert', params);
  },
  update(params) {
    return axios.post('/itemtype/update', params);
  },
  delete(params) {
    return axios.post('/itemtype/delete', params);
  },
  findall(params) {
    return axios.post('/itemtype/findall', params);
  },
  findbyname(params) {
    return axios.post('/itemtype/findbyname', params);
  }
}
