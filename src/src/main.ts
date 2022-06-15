import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel, CarouselItem, Col, Row, Card, Divider } from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Divider)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
