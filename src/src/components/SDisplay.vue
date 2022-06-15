<template>
  <div class="s-display">
    <img :src="src" alt="image">
    <div class="s-display-content">
      <div class="s-display-head">
        <slot name="head"></slot>
      </div>
      <div class="s-display-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SDisplay",
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.s-display > img {
  width: 30%;
}

.s-display-content {
  display: inline-block;
  vertical-align: top;
  padding: 0 30px;
}

.s-display-head {
  color: #002fa7;
}

.s-display-body {
  font-size: 18px;
  padding: 0 10px;
}
</style>
