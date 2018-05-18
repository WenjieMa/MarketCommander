import axios from '../app/axios'

export default {
  test() {
    return axios.get('/test')
  }
}
