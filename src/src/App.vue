<template>
  <div id="app">
    <!--    navbar-->
    <s-nav-bar class="navbar">
      <template v-slot:title>
        <h2>肉桂面包</h2>
      </template>
      <s-nav-bar-item v-for="link in realLinks" :to="link.to" :key="link.to">
        {{ link.name }}
      </s-nav-bar-item>
    </s-nav-bar>
    <!--    router-view-->
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!--    navbar-->
    <s-nav-bar class="navbar navbar-bottom">
      <template v-slot:title>
        <h2>肉桂面包</h2>
      </template>
      <s-nav-bar-item v-for="link in realLinks" :to="link.to" :key="link.to">
        {{ link.name }}
      </s-nav-bar-item>
    </s-nav-bar>
    <!--    footer-->
    <footer class="footer">
      <p>关于一个爱吃肉桂面包男孩的网站。</p>
      <p>你可以从这个博客获取一些有用的，没用的，或者不管什么东西。希望能够帮到你。你也可以向我的邮箱留言，可以提建议或者寻求帮助。</p>
      <strong>邮箱：<a href="mailto:shencong2001@live.cn">shencong2001@live.cn</a></strong>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SNavBar from '@/components/navbar/SNavBar.vue'
import SNavBarItem from '@/components/navbar/SNavBarItem.vue'

type Link = {
  name: string,
  to: string
}

export default Vue.extend({
  name: 'App',
  components: { SNavBarItem, SNavBar },
  data() {
    return {
      links: [] as Link[],
    }
  },
  created() {
    this.links = [
      { name: 'Home', to: '/' },
      { name: 'Articles', to: '/articles' },
      { name: 'Life', to: '/life' },
      { name: 'About', to: '/about' },
      { name: 'Post', to: '/post' },
    ]
    this.checkJwt()
  },
  methods: {
    checkJwt() {
      // 每次刷新检查token是否过期
      this.$http.get({ url: '/check' }).then(({ data }) => {
        if (data.code === 401) { // 鉴权失败
          localStorage.removeItem('cinnamon-token')
          localStorage.removeItem('cinnamon-info')
        }
      })
    },
  },
  computed: {
    realLinks(): Link[] {
      const userInfoStr = localStorage.getItem('cinnamon-info')
      if (userInfoStr) {
        const userInfo = JSON.parse(userInfoStr)
        if (userInfo.root) return this.links
      }
      return this.links.slice(0, this.links.length - 1)
    },
  },
})
</script>

<style lang="scss">
#app {
  padding: 40px 80px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
}

.fade-enter, .fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}

.navbar {
  margin-bottom: 50px;
}

.navbar-bottom {
  margin-top: 100px;
  margin-bottom: 30px;
}

.footer {
  height: 150px;
  //margin-top: 20px;
  line-height: 1.5em;

  a {
    text-decoration: none;
    color: inherit;
    transition: color .3s;

    &:hover {
      color: #002fa7;
    }
  }
}
</style>
