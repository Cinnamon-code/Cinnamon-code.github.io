<template>
  <div class="s-image-upload" @click="handleClick">
    <div class="s-image-upload__inner" :style="{height: `${height}px`}">
      <img v-if="imageUrl" :src="imageUrl">
      <i v-else class="el-icon-plus upload-icon" :style="{lineHeight: `${height}px`}"></i>
    </div>
    <input type="file" hidden :name="name" @change="handleChange" ref="input"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SImageUpload',
  data() {
    return {
      imageUrl: '',
    }
  },
  props: {
    name: {
      type: String,
      default() { return 'file' },
    },
    height: {
      type: Number,
      default() {
        return 500
      },
    },
  },
  methods: {
    handleClick() {
      (this.$refs.input as HTMLInputElement).click()
    },
    read(file: File | null): void {
      if (!file) return
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file as Blob)
      fileReader.onload = () => { this.imageUrl = fileReader.result as string }
    },
    handleChange(e: InputEvent) {
      const files = (e.target as HTMLInputElement).files
      const file = files ? files[0] : null
      this.read(file)
      const formData = new FormData()
      formData.set('cover', file as Blob)
      this.$emit('change', formData)
    },
  },
})
</script>

<style lang="scss" scoped>
.s-image-upload {
  .s-image-upload__inner {
    display: flex;
    //align-items: center;
    justify-content: center;
    border: 2px dashed #EEEEEE;
    cursor: pointer;
    overflow: hidden;
    transition: border-color .3s;

    &:hover {
      border-color: #01847f;
    }

    .upload-icon {
      font-size: 30px;
      color: #8c939d;
      text-align: center;
    }
  }
}
</style>
