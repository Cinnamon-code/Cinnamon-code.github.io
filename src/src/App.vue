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
    <!--    <transition name="fade">-->
    <!--    <keep-alive>-->
    <router-view></router-view>
    <!--    </keep-alive>-->
    <!--    </transition>-->
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
    return { links: [] as Link[] }
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
  computed: {
    realLinks(): Link[] {
      const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
      if (userInfo && userInfo.root) return this.links
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
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
}

#app {
  padding: 140px 80px 0;
}

//.fade-enter, .fade-leave-to {
//  transform: translateY(30px);
//  opacity: 0;
//}
//
//.fade-enter-active, .fade-leave-active {
//  transition: all 2s ease;
//}

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
      color: #01847F;
    }
  }
}

// 强行更改全局样式
.el-input__inner, .el-textarea__inner {
  border: 2px #EEEEEE solid !important;
  border-radius: 0 !important;
}

//.el-input__inner {
//  border-left: none !important;
//}

.el-input-group__prepend {
  border: 2px solid #EEEEEE !important;
  border-right: none !important;
  border-radius: 0 !important;
  //background-color: #156554 !important;

  i::before {
    //color: #fff;
    font-weight: bolder;
    //font-size: 16px;
  }
}

.el-textarea__inner {
  padding: 12px 15px !important;
}

.el-input__inner:focus, .el-textarea__inner:focus {
  border: #01847F 2px solid !important;
}

//.el-input__inner:focus {
//  border-left: none !important;
//}

.el-button, .tox {
  border-radius: 0 !important;
}

.el-card {
  border-radius: 0 !important;

  .el-card__header {
    padding: 1em 20px !important;
    background-color: #01847F !important;
    //border: 2px #01847F solid !important;
    color: #fff !important;
    font-weight: 500 !important;
  }
}

.el-pagination.is-background .el-pager li:not(.disabled) {
  &.active {
    color: #fff !important;
    background-color: #01847F !important;
  }

  &:not(.active):hover {
    color: #01847F !important;
  }
}

.el-select-dropdown__item.selected {
  color: #01847F !important;
}
</style>
