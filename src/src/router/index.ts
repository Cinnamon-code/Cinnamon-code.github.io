import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Notification } from 'element-ui'
import { request } from '@/request/'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/home',
    redirect: '/',
  },
]


const router = new VueRouter({
  mode: 'hash',
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('cinnamon-token')
  if (token) { // 每次路由检查token是否过期
    request.get({ url: '/jwt' }).then(({ data }) => {
      // 鉴权失败
      if (data.code === 401) {
        Notification({
          title: '登录已过期',
          message: '请重新登录',
          duration: 1200,
          onClose() { next('/') },
          position: 'top-left',
        })
        localStorage.removeItem('cinnamon-token')
        localStorage.removeItem('cinnamon-info')
      } else next()
    })
  } else next()
})

export default router
