<template>
  <el-card shadow="none" :body-style="{ padding: '15px 35px 0' }">
    <template v-slot:header>
      <span class="header">{{ isLogin === 0 ? 'Login' : isLogin === 1 ? 'Register' : 'Welcome' }}</span>
    </template>
    <el-form v-if="isLogin !== 2" ref="form" :model="models" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="models.username" placeholder="请输入用户名"
                  clearable prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item ref="pwdInput" label="密码" prop="password">
        <el-input v-model="models.password" type="password" placeholder="请输入密码"
                  clearable show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item v-if="isLogin === 1" label="邮箱" prop="email">
        <el-input v-model="models.email" placeholder="请输入邮箱"
                  clearable prefix-icon="el-icon-paperclip"></el-input>
      </el-form-item>
    </el-form>
    <div v-if="isLogin !== 2" class="op-btn">
      <el-button v-if="isLogin === 0" type="primary" plain class="main-btn" @click="login">登录</el-button>
      <el-button v-else type="primary" plain class="main-btn" @click="register">注册</el-button>
      <el-button type="danger" plain @click="reset" class="other-btn">重置</el-button>
      <el-button v-if="isLogin === 0" plain @click="switchCard" class="other-btn">去注册</el-button>
      <el-button v-else plain @click="switchCard" class="other-btn">去登录</el-button>
    </div>
    <div v-if="isLogin === 2" class="welcome">
      <h1>你好</h1>
      <h3>{{ username }}</h3>
      <el-button type="danger" plain @click="logout">退出登录</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import md5 from 'md5'
import { Form, FormItem } from 'element-ui'
// import mutationTypes from '@/store/mutation-types'

export default Vue.extend({
  name: 'SHomeForm',
  data() {
    const checkUsername = (_: never, value: string, callback: (err?: Error) => void) => {
      this.$http.post({
        url: '/user/check_username',
        data: { username: value },
      }).then(({ data }) => {
        data.result ? callback() : callback(new Error('username has been existed'))
      })
    }

    const checkEmail = (_: never, value: string, callback: (err?: Error) => void) => {
      if (value) {
        const emailReg = /^\w+@\w+\.\w+$/
        emailReg.test(value) ? callback() : callback(new Error('invalid email'))
      } else callback()
    }

    return {
      loginModel: { username: '', password: '' },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
      },
      registerModel: { username: '', password: '', email: '' },
      registerRules: {
        username: [
          { required: true, trigger: 'blur' },
          { min: 5, max: 10, trigger: 'blur' },
          { validator: checkUsername, trigger: 'blur' },
        ],
        password: [
          { required: true, trigger: 'blur' },
          { min: 10, max: 20, trigger: 'blur' },
        ],
        email: [{ validator: checkEmail, trigger: 'blur' }],
      },
    }
  },
  props: {
    isLogin: { type: Number, required: true },
  },
  methods: {
    switchCard() {this.$emit('switch')},
    reset() { (this.$refs.form as Form).resetFields() },
    login() {
      (this.$refs.form as Form).validate(valid => {
        if (valid) {
          this.$http.post({
            url: '/user/login',
            data: { ...this.loginModel, password: md5(md5(md5(this.loginModel.password))) },
          }).then(({ data }) => {
            this.$message({ type: data.status ? 'success' : 'error', message: data.msg })
            if (data.status) { // 登录成功
              // 将用户信息保存
              // userInfo { username: string, email: string, root: boolean, isLogin: boolean }
              const userInfo = { ...data.userInfo, isLogin: true }
              localStorage.setItem('cinnamon-token', data.token)
              localStorage.setItem('cinnamon-info', JSON.stringify(userInfo))
              // this.$store.commit(mutationTypes.LOGIN, userInfo)
              setTimeout(() => location.reload(), 1000)
            } else (this.$refs.pwdInput as FormItem).resetField()
          })
        }
      })
    },
    register() {
      (this.$refs.form as Form).validate(valid => {
        if (valid) {
          this.$http.post({
            url: '/user/register',
            data: { ...this.registerModel, password: md5(md5(md5(this.registerModel.password))) },
          }).then(({ data }) => {
            this.$message({ type: data.status ? 'success' : 'error', message: data.msg })
            this.switchCard()
            this.reset()
          })
        }
      })
    },
    logout() {
      location.reload()
      localStorage.removeItem('cinnamon-token')
      localStorage.removeItem('cinnamon-info')
      setTimeout(() => this.$emit('logout'), 500)
    },
  },
  computed: {
    models(): any { return this.isLogin === 0 ? this.loginModel : this.registerModel },
    rules(): any {return this.isLogin === 0 ? this.loginRules : this.registerRules},
    username(): string {
      const userInfo = localStorage.getItem('cinnamon-info')
      if (userInfo) return JSON.parse(userInfo).username
      return ''
    },
  },
  watch: {
    isLogin() {
      (this.$refs.form as Form).resetFields()
    },
  },
  created() {
    // 挂载阶段获取 userInfo
    const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
    if (!userInfo) return
    if (userInfo.isLogin) this.$emit('login')
  },
})
</script>

<style lang="scss" scoped>
.el-card {
  position: relative;
  height: 449px;
  border-radius: 0;

  .header {
    font-weight: 500;
    color: #002fa7;
  }
}

.op-btn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  padding: 0 35px 25px;

  .main-btn {
    flex: 2;
  }

  .other-btn {
    flex: 1;
  }
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 50px;

  .el-button {
    width: 80%;
    margin-top: 30px;
  }
}
</style>
