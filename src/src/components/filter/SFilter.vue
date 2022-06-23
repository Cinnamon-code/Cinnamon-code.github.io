<template>
  <div class="s-filter">
    <el-input v-model="input" clearable>
      <template v-slot:prepend><i class="el-icon-search"></i></template>
    </el-input>
    <el-select v-model="selected">
      <el-option v-for="(value, key) in filter" :value="key" :label="value" :key="key">{{ value }}</el-option>
    </el-select>
    <!--    <el-button type="success" @click="onConfirm(input, selected)" plain>确定</el-button>-->
    <!--    <el-button type="danger" @click="reset" plain>重置</el-button>-->
    <s-button type="success" @click="onConfirm(input, selected)">确定</s-button>
    <s-button type="danger" @click="reset">重置</s-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SButton from '@/components/SButton.vue'

export default Vue.extend({
  name: 'SFilter',
  components: { SButton },
  data() {
    return { selected: 'timeDown', input: '' }
  },
  props: {
    filter: {
      type: Object,
      default() { return {} },
    },
    onConfirm: {
      type: Function,
      required: true,
    },
  },
  methods: {
    reset() {
      this.input = ''
      this.selected = 'timeDown'
      this.onConfirm(this.input, this.selected)
    },
  },
})
</script>

<style lang="scss" scoped>
.s-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items: center;

  .el-input {
    flex: 6;
  }

  .el-select {
    flex: 4;
  }

  .el-button {
    flex: 1;
    margin: 0;
  }
}
</style>
