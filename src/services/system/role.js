import axios from '@/app-store/axios'

export default {
  insert(params) {
    return axios.post('/role/insert', params);
  },
  update(params) {
    return axios.post('/role/update', params);
  },
  delete(params) {
    return axios.post('/role/delete', params);
  },
  findall(params) {
    return axios.post('/role/findall', params);
  },
  insertRole2Assistant(params) {
    return axios.post('/role/role2assistant/insert', params);
  },
  updateRole2Assistant(params) {
    return axios.post('/role/role2assistant/update', params);
  },
  deleteRole2Assistant(params) {
    return axios.post('/role/role2assistant/delete', params);
  },
  findallRole2Assistant(params) {
    return axios.post('/role/role2assistant/findall', params);
  },
  findallRole2AssistantNone(params) {
    return axios.post('/role/role2assistant/findallnone', params);
  }
}
