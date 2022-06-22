import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/ArticlesView.vue'),
    children: [
      {
        path: ':_id',
        name: 'Article',
        component: () => import('@/components/articlesView/SArticle.vue'),
      },
    ],
  },
]


const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('cinnamon-token')
  const { $http, $message } = router.app
  if (token) { // 每次路由检查token是否过期
    $http.get({ url: '/jwt' }).then(({ data }) => {
      // 鉴权失败
      if (data.code === 401) {
        $message({
          type: 'warning',
          message: '登录已过期，请重新登录。',
          duration: 1500,
          onClose() { next('/') },
        })
        localStorage.removeItem('cinnamon-token')
        localStorage.removeItem('cinnamon-info')
      } else next()
    })
  } else next()
})
export default router
