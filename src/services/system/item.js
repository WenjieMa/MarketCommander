import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/item/insert', params);
  },
  update(params) {
    return axios.post('/item/update', params);
  },
  delete(params) {
    return axios.post('/item/delete', params);
  },
  findall(params) {
    return axios.post('/item/findall', params);
  },
  findbyname(params) {
    return axios.post('/item/findbyname', params);
  },
  findallimport(params) {
    return axios.post('/item/import/findall', params);
  },
  findimportbyname(params) {
    return axios.post('/item/import/findbyname', params);
  },
  changeeff(params) {
    return axios.post('/item/changeeff', params);
  },
  import(params) {
    return axios.post('/item/import', params);
  }
}
