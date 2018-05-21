import axios from '@/app/axios'

export default {
  insert1(params) {
    return axios.post('/mainpage/start/1', params);
  },
  update1(params) {
    return axios.put('/mainpage/start/1', params);
  },
  delete1(params) {
    return axios.delete('/mainpage/start/1', {
      data: params
    });
  },
  findall1(params) {
    return axios.get('/mainpage/start/1', {
      data: params
    });
  },
  changeeff1(params) {
    return axios.post('/mainpage/start/1/eff', params);
  },
  insert2(params) {
    return axios.post('/mainpage/start/2', params);
  },
  update2(params) {
    return axios.put('/mainpage/start/2', params);
  },
  delete2(params) {
    return axios.delete('/mainpage/start/2', {
      data: params
    });
  },
  findall2(params) {
    return axios.get('/mainpage/start/2', {
      data: params
    });
  },
  changeeff2(params) {
    return axios.post('/mainpage/start/2/eff', params);
  },
  findAllAbove() {
    return axios.get('/mainpage/start/all');
  }
}
