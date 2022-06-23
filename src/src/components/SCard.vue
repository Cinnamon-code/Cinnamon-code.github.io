<template>
  <div class="s-card" :class="shadow">
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
      type: String,
      default() { return 'always' },
      validator(value: string) { return ['always', 'none', 'hover'].includes(value) },
    },
    headerBackgroundColor: {
      type: String,
      default() { return '#01847F'},
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

<style lang="scss" scoped>
.s-card {
  border: 2px #EEEEEE solid;

  .s-card__body {
    border-top: none;
  }
}


.s-card__header {
  padding: 15px;
  font-weight: 500;
}

.always {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.hover {
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
