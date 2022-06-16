<template>
  <div class="s-navbar-item">
    <s-link class="s-navbar-item__inner"
            :to="to"
            :style="{
         color: this.routePath === this.to ? '#002fa7' : 'inherit'
    }">
      <slot></slot>
    </s-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SLink from '@/components/SLink.vue'

export default Vue.extend({
  name: "SNavBarItem",
  components: {SLink},
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {},
  computed: {
    routePath() {
      return `/${this.$route.path.split('/')[1]}`
    }
  }
})
</script>

<style lang="scss" scoped>
.s-navbar-item__inner {
  font-weight: 500;
  text-decoration: none;
  transition: color .3s;
}
</style>
