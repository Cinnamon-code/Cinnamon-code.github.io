<template>
  <div id="app">
    <!--    navbar-->
    <s-nav-bar class="navbar navbar-top">
      <template v-slot:title>
        <h2>肉桂面包</h2>
      </template>
      <s-nav-bar-item v-for="link in realLinks" :to="link.to" :key="link.to">
        {{ link.name }}
      </s-nav-bar-item>
    </s-nav-bar>
    <!--    router-view-->
    <transition name="fade">
      <!--      <keep-alive>-->
      <router-view></router-view>
      <!--      </keep-alive>-->
    </transition>
    <!--    navbar-->
    <!--    <s-nav-bar class="navbar navbar-bottom">-->
    <!--      <template v-slot:title>-->
    <!--        <h2>肉桂面包</h2>-->
    <!--      </template>-->
    <!--      <s-nav-bar-item v-for="link in realLinks" :to="link.to" :key="link.to">-->
    <!--        {{ link.name }}-->
    <!--      </s-nav-bar-item>-->
    <!--    </s-nav-bar>-->
    <!--    footer-->
    <footer class="footer">
      <h1>End</h1>
      <p>关于一个爱吃肉桂面包男孩的网站。</p>
      <p>你可以从这个博客获取一些有用的，没用的，或者不管什么东西。希望能够帮到你。你也可以向我的邮箱留言，可以提建议或者寻求帮助。</p>
      <p>邮箱：<a href="mailto:shencong2001@live.cn">shencong2001@live.cn</a></p>
      <p>项目地址：
        <a href="https://github.com/Cinnamon-code/Cinnamon-code.github.io" target="_blank">
          github.com/Cinnamon-code/Cinnamon-code.github.io
        </a>
      </p>
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
    // this.checkJwt()
  },
  methods: {
    checkJwt() {
      // 每次刷新检查token是否过期
      this.$http.get({ url: '/jwt' }).then(({ data }) => {
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
  mounted() {
    // 为navbar-top加阴影
    window.onscroll = function () {
      const navbar = document.querySelector('.navbar-top') as HTMLDivElement
      if (window.scrollY === 0) {
        navbar.style.boxShadow = 'none'
        navbar.style.padding = '50px 80px'
      } else {
        navbar.style.boxShadow = '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
        navbar.style.padding = '15px 80px'
      }
    }
  },
})
</script>

<style lang="scss">
#app {
  padding: 140px 80px 0;
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

.navbar-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 50px 80px;
  background-color: #fff;
  z-index: 999;
  transition: all .5s ease;
}

.navbar-bottom {
  margin-top: 100px;
  margin-bottom: 30px;
}

.footer {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 30px;
  padding: 40px 80px 60px;
  line-height: 1.5em;
  //background-color: #156554;
  //color: #fff;
  h1 {
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color .3s;

    &:hover {
      color: #156554;
    }
  }
}
</style>
