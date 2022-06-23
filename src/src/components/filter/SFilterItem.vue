<template>
  <!--  <div class="s-filter-item">-->
  <!--    <el-button :type="active ? activeType : nonActiveType" @click="handleClick" :plain="!active">-->
  <!--      <slot></slot>-->
  <!--    </el-button>-->
  <!--  </div>-->
  <el-option :value="prop" :label="label">
    <slot></slot>
  </el-option>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SFilterItem',
  props: {
    isActive: {
      type: Boolean,
      default() { return false },
    },
    activeType: {
      type: String,
      default() { return 'success' },
    },
    nonActiveType: {
      type: String,
      default() { return 'info' },
    },
    prop: { type: String, required: true },
    label: { type: String, default(): string { return this.prop } },
  },
  data() {
    return { active: this.isActive }
  },
  methods: {
    handleClick() {
      this.active = !this.active
      // 通知父组件，把prop和value传递
      this.$parent.$emit('click', { prop: this.prop, value: this.active })
    },
  },
  mounted() {
    this.$on('other-change', (value: boolean) => this.active = value)
  },
})
</script>

<style lang="scss" scoped>
.s-filter-item {
  display: inline-block;
  flex: 1;

  .el-button {
    width: 100%;
  }
}
</style>
