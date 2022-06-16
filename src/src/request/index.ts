import { BASE_URL, TIME_OUT } from '@/request/config'
import Request from '@/request/request'
import Vue from 'vue'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export default {
  install(vue: typeof Vue) {
    vue.prototype.$http = request
  }
}
