<template>
  <div class="s-filter">
    <el-input v-model="input">
      <template v-slot:prepend><i class="el-icon-search"></i></template>
    </el-input>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SFilter',
  data() {
    return {
      input: '',
    }
  },
  mounted() {
    const input = document.querySelector('.el-input__inner') as HTMLInputElement
    const prepend = document.querySelector('.el-input-group__prepend') as HTMLDivElement
    input.style.borderRadius = prepend.style.borderRadius = '0'
  },
})
</script>

<style lang="scss" scoped>
.el-input__inner, .el-input-group__prepend {
  border-radius: 0;
}
</style>
