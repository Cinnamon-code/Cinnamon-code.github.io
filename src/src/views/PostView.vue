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
    <!--    <el-button type="primary" plain :loading="loading" class="submit-btn" @click="submit">{{ btnText }}</el-button>-->
    <s-button type="success" plain :disabled="disabled" class="submit-btn" @click="submit">{{ btnText }}</s-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import config from '@/config/tinymce.config'
import SImageUpload from '@/components/SImageUpload.vue'
import actionTypes from '@/store/action-types'
import SButton from '@/components/SButton.vue'

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
      btnText: '提交',
      disabled: false
    }
  },
  methods: {
    handleChange(file: FormData) {
      this.cover = file
    },
    submit() {
      this.btnText = '提交中...'
      this.disabled = true
      this.cover?.set('title', this.title)
      this.cover?.set('digest', this.digest)
      this.cover?.set('content', this.content)
      this.$store.dispatch(actionTypes.POST, {
        $http: this.$http,
        $message: this.$message,
        cover: this.cover,
        callback: (status: boolean) => {
          this.disabled = false
          if (status) {
            this.title = this.content = this.digest = ''
            this.cover = new FormData()
            window.scroll({ top: 0, behavior: 'smooth' })
          }
        },
      })
    },
  },
  components: { SButton, SImageUpload, Editor },
})
</script>

<style lang="scss" scoped>
.digest {
  margin-top: 60px;
}

.select-cover {
  margin-top: 80px;
}


.submit-btn {
  margin-top: 60px;
  width: 100%;
  height: 3em;
  font-size: 18px;
}
</style>
