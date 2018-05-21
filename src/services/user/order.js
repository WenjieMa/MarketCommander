import axios from '@/app/axios'

export default {
  insert(params) {
    return axios.post('/order', params);
  },
  update(params) {
    return axios.put('/order', params);
  },
  delete(params) {
    return axios.delete('/order', {
      data: params
    });
  },
  findordersumbyuserid(params) {
    return axios.get('/order/findordersumbyuserid', {
      data: params
    });
  },
  findordersumbysumid(params) {
    return axios.get('/order/findordersumbysumid', {
      data: params
    });
  },
  senddelivery(params) {
    return axios.put('/order/senddelivery', params);
  },
  findordersumbyparams(params) {
    return axios.post('/order/findordersumbyparams',
      params
    );
  },
  findordersmallbysumid(params) {
    return axios.get('/order/findordersmallbysumid', {
      data: params
    });
  },
  updatestate(params) {
    return axios.put('/order/updatestate', params);
  },
  insertrefund(params) {
    return axios.post('/order/insertrefund', params);
  }
}
