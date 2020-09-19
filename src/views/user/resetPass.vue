<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="请输入用户名"
          v-decorator="[
                'username',
                {initialValue:'admin',rules: [{ required: true, message: '请输入用户名' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input-password
          size="large"
          placeholder="请输入原密码"
          v-decorator="[
                'oldPassword',
                {initialValue:'',rules: [{ required: true, message: '请输入原密码' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-input-password
          size="large"
          placeholder="请输入新密码"
          v-decorator="[
                'newPassword',
                {initialValue:'',rules: [{ required: true, message: '请输入新密码' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-input-password
          size="large"
          placeholder="请确认密码"
          v-decorator="[
                'newPassword2',
                {initialValue:'',rules: [{ required: true, message: '请确认密码' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <router-link class="register" :to="{ path: '/user/login' }">返回登录</router-link>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loginBtn"
          :disabled="loginBtn"
        >提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import md5 from 'md5'
import { resetPass } from '@/api/user'

export default {
  data() {
    return {
      loginBtn: false,
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit(e) {
      // 登录
      // captcha: "7836"
      // code: "11234567654323456"
      // newPassword: "abcd-8888"
      // oldPassword: "abcd-0000"
      // token: "9508935104c140018c8044705f11e19b"
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (values['newPassword'] != values['newPassword2']) {
            this.$message.warning('新密码和确认密码不一致')
            return false
          }
          const params = { ...values }
          delete params.newPassword2
          // loginParams.password = md5(values.password)
          console.log(params)
          this.loginBtn = true
          resetPass(params)
            .then(res => {
              this.$router.push({ path: '/user/login' })
            })
            .catch(err => {
              this.loginBtn = false
            })
        } else {
          setTimeout(() => {
            this.loginBtn = false
          }, 600)
        }
      })
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
