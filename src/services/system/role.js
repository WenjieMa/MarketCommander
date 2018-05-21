import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/role', params);
  },
  update(params) {
    return axios.put('/role', params);
  },
  delete(params) {
    return axios.delete('/role', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/role', {
      data: params
    });
  },
  insertRole2Assistant(params) {
    return axios.post('/role/role2assistant', params);
  },
  updateRole2Assistant(params) {
    return axios.put('/role/role2assistant', params);
  },
  deleteRole2Assistant(params) {
    return axios.delete('/role/role2assistant', {
      data: params
    });
  },
  findallRole2Assistant(params) {
    return axios.get('/role/role2assistant', {
      data: params
    });
  },
  findallRole2AssistantNone(params) {
    return axios.get('/role/role2assistant/findallnone', {
      data: params
    });
  }
}
