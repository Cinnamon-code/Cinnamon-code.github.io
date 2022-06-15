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

<script>
export default {
  name: "SNavBar"
}
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

.s-navbar {
  height: 49px;
  //border: 1px solid black;
  line-height: 49px;
}

.s-navbar-title {
  float: left;
  height: inherit;

  & * {
    padding: 0;
    margin: 0;
    height: inherit;
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

  & > .s-navbar-item {
    padding-left: 60px;
  }
}
</style>
