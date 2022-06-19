<template>
  <div class="s-card" :class="[shadow ? 'shadow': '']">
    <div class="s-card__header" :style="{backgroundColor: headerBackgroundColor, color: headerColor}">
      <span v-if="header">{{ header }}</span>
      <slot v-else name="header"></slot>
    </div>
    <div class="s-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SCard',
  props: {
    header: {
      type: String,
      default() { return '' },
    },
    shadow: {
      type: Boolean,
      default() { return false },
    },
    headerBackgroundColor: {
      type: String,
      default() { return '#002fa7'},
    },
    headerColor: {
      type: String,
      default() { return '#fff' },
    },
    bodyStyle: {
      type: Object,
      default() { return { padding: '20px' }},
    },
  },
})
</script>

<style scoped>
.s-card__body {
  border: 2px #EEEEEE solid;
  border-top: none;
}

.s-card__header {
  padding: 15px;
  font-weight: 500;
}

.shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);;
}
</style>
