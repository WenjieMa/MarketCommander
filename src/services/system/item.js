import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/item/obj', params);
  },
  update(params) {
    return axios.put('/item/obj', params);
  },
  delete(params) {
    return axios.delete('/item/delete', {
      data: params
    });
  },
  findall(params) {
    return axios.get('/item/obj/all', {
      data: params
    });
  },
  findbyname(params) {
    return axios.get('/item/obj/allbyparams', {
      data: params
    });
  },
  findallimport(params) {
    return axios.get('/item/import/all', {
      data: params
    });
  },
  findimportbyname(params) {
    return axios.post('/item/import/allbyname',
      params
    );
  },
  changeeff(params) {
    return axios.put('/item/changeeff', params);
  },
  import (params) {
    return axios.post('/item/import', params);
  }
}
