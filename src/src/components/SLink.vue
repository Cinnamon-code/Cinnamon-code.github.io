<template>
  <div class="s-link" :style="linkStyle">
    <a href="#" @click="handleClick" :class="[hover ? hoverBlue ? 'blue' : 'green' : '']">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SLink',
  methods: {
    handleClick(e: MouseEvent) {
      e.preventDefault()
      this.$router.push(this.to)
    },
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    linkStyle: {
      type: Object,
      default() {
        return {}
      },
    },
    hover: {
      type: Boolean,
      default() { return true },
    },
    hoverBlue: {
      type: Boolean,
      default() { return false },
    },
  },
})
</script>

<style lang="scss" scoped>
.s-link > a {
  color: inherit;
  text-decoration: none;
  transition: color .3s;
}

.green:hover {
  color: #01847F;
}

.blue:hover {
  color: #002fa7;
}
</style>
