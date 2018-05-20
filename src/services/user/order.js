import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/order/insert', params);
  },
  update(params) {
    return axios.post('/order/update', params);
  },
  delete(params) {
    return axios.post('/order/delete', params);
  },
  findordersumbyuserid(params) {
    return axios.post('/order/findordersumbyuserid', params);
  },
  findordersumbysumid(params) {
    return axios.post('/order/findordersumbysumid', params);
  },
  senddelivery(params) {
    return axios.post('/order/senddelivery', params);
  },
  findordersumbyparams(params) {
    return axios.post('/order/findordersumbyparams', params);
  },
  findordersmallbysumid(params) {
    return axios.post('/order/findordersmallbysumid', params);
  },
  updatestate(params) {
    return axios.post('/order/updatestate', params);
  },
  insertrefund(params) {
    return axios.post('/order/insertrefund', params);
  }
}
