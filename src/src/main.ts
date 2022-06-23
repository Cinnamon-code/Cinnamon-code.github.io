import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

// markdown样式
import 'github-markdown-css/github-markdown-light.css'
// 代码高亮
import 'highlight.js/styles/github.css'
import Request from '@/request'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Request)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
