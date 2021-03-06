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
      <s-button v-if="isLogin === 0" type="success" plain class="btn" @click="login">登录</s-button>
      <s-button v-else type="success" plain class="btn" @click="register">注册</s-button>
      <s-button type="danger" plain @click="reset" class="btn">重置</s-button>
      <s-button v-if="isLogin === 0" type="warning" plain @click="switchCard" class="btn">去注册</s-button>
      <s-button v-else type="warning" plain @click="switchCard" class="btn">去登录</s-button>
    </div>
    <div v-if="isLogin === 2" class="welcome">
      <h1>你好</h1>
      <h3>{{ username }}</h3>
      <s-button type="danger" plain @click="logout" class="btn">退出登录</s-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import actionTypes from '@/store/action-types'
import SButton from '@/components/SButton.vue'

export default Vue.extend({
  name: 'SHomeForm',
  components: { SButton },
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
        if (valid) this.$store.dispatch(actionTypes.LOGIN, {
          ...this.loginModel,
          $http: this.$http,
          $message: this.$message,
          pwdInput: this.$refs.pwdInput,
        })
      })
    },
    register() {
      (this.$refs.form as Form).validate(valid => {
        if (valid) this.$store.dispatch(actionTypes.REGISTER, {
          ...this.registerModel,
          $http: this.$http,
          $message: this.$message,
          switchCard: this.switchCard,
          reset: this.reset,
        })
      })
    },
    logout() { this.$store.dispatch(actionTypes.LOGOUT, this.$emit) },
  },
  computed: {
    models(): object { return this.isLogin === 0 ? this.loginModel : this.registerModel },
    rules(): object {return this.isLogin === 0 ? this.loginRules : this.registerRules},
    username(): string {
      const userInfo = localStorage.getItem('cinnamon-info')
      if (userInfo) return JSON.parse(userInfo).username
      return ''
    },
  },
  watch: {
    isLogin() { // 切换时清空输入框和验证
      const form: Form = this.$refs.form as Form
      form.resetFields()
      this.$nextTick(() => form.clearValidate())
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
}

.op-btn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 35px 25px;

  .btn {
    margin-right: 10px;
    flex: 1;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      flex: 2;
    }
  }
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 50px;

  .s-button {
    width: 80%;
    margin-top: 30px;
  }
}
</style>
