<template>
  <div class="post">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="16" :lg="18" :xl="18">
        <div class="editor">
          <h1>开始你的创作吧！</h1>
          <editor :api-key="apiKey" :init="init" cloud-channel="6"
                  tag-name="div" v-model="content" ref="editor"></editor>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :lg="6" :xl="6">
        <div class="title">
          <h1>好听的标题</h1>
          <el-input v-model="title"></el-input>
        </div>
        <div class="digest">
          <h1>内容摘要</h1>
          <el-input type="textarea" v-model="digest" :rows="12"></el-input>
        </div>
      </el-col>
    </el-row>
    <div class="select-cover">
      <h1>选个封面</h1>
      <s-image-upload @change="handleChange"></s-image-upload>
    </div>
    <el-button type="primary" plain :loading="loading" class="submit-btn" @click="submit">{{ btnText }}</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import config from '@/config/tinymce.config'
import SImageUpload from '@/components/SImageUpload.vue'
import { AxiosError } from 'axios'

export default Vue.extend({
  name: 'PostView',
  data() {
    return {
      apiKey: config.API_KEY,
      init: {
        height: 800,
        borderRadius: 0,
        ...config,
      },
      title: '',
      content: '',
      digest: '',
      cover: new FormData(),
      loading: false,
      btnText: '提交',
    }
  },
  methods: {
    handleChange(file: FormData) {
      this.cover = file
    },
    async submit() {
      this.loading = true
      this.cover?.set('title', this.title)
      this.cover?.set('digest', this.digest)
      this.cover?.set('content', this.content)
      await this.$http.post({
        url: '/post/upload', data: this.cover,
      }).then(({ data }) => {
        this.loading = false
        this.$message({
          type: data.status ? 'success' : 'error', message: data.msg,
          duration: 1500, onClose() { data.status && location.reload() },
        })
      }).catch((err: AxiosError) => {
        this.loading = false
        this.$message({ type: 'error', message: err.message, duration: 1500 })
      })
    },
  },
  components: { SImageUpload, Editor },
})
</script>

<style lang="scss">
.digest {
  margin-top: 60px;
}

.el-input__inner, .el-textarea__inner {
  border: 2px #EEEEEE solid;
  border-radius: 0;
  font-size: 18px;
}

.el-textarea__inner {
  padding: 12px 15px;
}

.el-input__inner:focus, .el-textarea__inner:focus {
  border: #232F3E 2px solid;
}

.select-cover {
  margin-top: 80px;
}


.submit-btn {
  margin-top: 60px;
  width: 100%;
  height: 3em;
  border-radius: 0;
  font-size: 18px;
}
</style>
