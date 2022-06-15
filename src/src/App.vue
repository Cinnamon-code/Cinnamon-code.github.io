<template>
  <div id="app">
    <s-nav-bar class="navbar">
      <template v-slot:title>
        <h2>肉桂面包</h2>
      </template>
      <s-nav-bar-item v-for="link in links"
                      :to="link.to"
                      :key="link.to">
        {{ link.name }}
      </s-nav-bar-item>
    </s-nav-bar>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SNavBar from '@/components/navbar/SNavBar.vue'
import SNavBarItem from '@/components/navbar/SNavBarItem.vue'

type Link = {
  name: string,
  to: string,
}

export default Vue.extend({
  name: 'App',
  components: { SNavBarItem, SNavBar },
  data() {
    return {
      links: [] as Link[],
    }
  },
  async created() {
    await new Promise(resolve => {
      setTimeout(() => {
        this.links = [
          { name: 'Home', to: '/' },
          { name: 'Articles', to: '/articles' },
          { name: 'Life', to: '/life' },
          { name: 'About', to: '/about' },
        ]
      }, 500)
    })
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
  transition: all .3s ease;
}

.navbar {
  margin-bottom: 50px;
}
</style>
