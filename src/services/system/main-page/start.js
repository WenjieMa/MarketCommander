import axios from '@/app/axios'

export default {
  insert1(params) {
    return axios.post('/mainpage/start/1/insert', params);
  },
  update1(params) {
    return axios.post('/mainpage/start/1/update', params);
  },
  delete1(params) {
    return axios.post('/mainpage/start/1/delete', params);
  },
  findall1(params) {
    return axios.post('/mainpage/start/1/findall', params);
  },
  changeeff1(params) {
    return axios.post('/mainpage/start/1/changeeff', params);
  },
  insert2(params) {
    return axios.post('/mainpage/start/2/insert', params);
  },
  update2(params) {
    return axios.post('/mainpage/start/2/update', params);
  },
  delete2(params) {
    return axios.post('/mainpage/start/2/delete', params);
  },
  findall2(params) {
    return axios.post('/mainpage/start/2/findall', params);
  },
  changeeff2(params) {
    return axios.post('/mainpage/start/2/changeeff', params);
  },
  findAllAbove() {
    return axios.post('/mainpage/start/findallabove');
  }
}
