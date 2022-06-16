import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request {
  private _instance: AxiosInstance

  constructor(axiosConfig: AxiosRequestConfig) {
    this._instance = axios.create(axiosConfig)
    this._instance.interceptors.request.use(config => {
      const token = localStorage.getItem('cinnamon-token') ?? ''
      if (token.startsWith('Bearer ')) config.headers!['Authorization'] = token
      else config.headers!['Authorization'] = `Bearer ${ token }`
      return config
    }, error => Promise.reject(error))
    this._instance.interceptors.response.use(response => {
      // todo
      return response
    }, error => Promise.reject(error))
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this._instance.request(config)
          .then(res => resolve(res))
          .catch(err => reject(err))
    })
  }

  get(config: AxiosRequestConfig) {
    return this._instance.request({
      ...config,
      method: 'GET',
    })
  }

  post(config: AxiosRequestConfig) {
    return this._instance.request({
      ...config,
      method: 'POST',
    })
  }

  delete(config: AxiosRequestConfig) {
    return this._instance.request({
      ...config,
      method: 'DELETE',
    })
  }

  put(config: AxiosRequestConfig) {
    return this._instance.request({
      ...config,
      method: 'PUT',
    })
  }
}

export default Request
