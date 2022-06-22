<template>
  <div class="s-filter-item">
    <el-button :type="isActive ? activeType : nonActiveType" @click="handleClick">{{ condition }}</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SFilterItem',
  props: {
    condition: {
      type: String,
      required: true,
    },
    activeType: {
      type: String,
      default() {
        return 'danger'
      },
    },
    nonActiveType: {
      type: String,
      default() {
        return 'info'
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
      this.$emit('change', this.isActive)
    },
  },
})
</script>

<style lang="scss" scoped>
.el-button {
  border-radius: 0;
}
</style>
