<template>
  <div class="s-navbar">
    <div class="s-navbar-title"
         @click="$router.push('/')">
      <slot name="title"></slot>
    </div>
    <div class="s-navbar-items">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SNavBar',
})
</script>

<style lang="scss" scoped>
.s-navbar::before, .s-navbar::after {
  display: table;
  content: "";
  height: 0;
  visibility: hidden;
}

.s-navbar::after {
  clear: both;
}

.s-navbar-title {
  float: left;
  height: inherit;

  & * {
    padding: 0;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }
}

.s-navbar-items {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  .s-navbar-item {
    padding-left: 60px;
    line-height: 2em;
  }
}
</style>
