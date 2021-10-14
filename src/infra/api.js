import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

// Intercept all response and get data
api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
