import axios from '../app-store/axios'

export default {
  test() {
    return axios.get('/test')
  }
}
