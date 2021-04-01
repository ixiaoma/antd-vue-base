<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误（admin )" />
      <a-form-item>
        <a-input
          class='login-input'
          size="large"
          type="text"
          placeholder="请输入用户名"
          v-decorator="[
            'username',
            {initialValue:'admin',rules: [{ required: true, message: '请输入用户名' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
          ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password
          class='login-input'
          size="large"
          placeholder="请输入密码"
          v-decorator="[
            'password',
            {initialValue:'123456',rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
          ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <router-link
          :to="{ name: 'resetPass'}"
          class="forge-password"
          style="float: right;"
        >重置密码</router-link>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >登录</a-button>
      </a-form-item>
    </a-form>

    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { login, get2step , loginToken} from '@/api/user'

export default {
  components: {
    TwoStepCaptcha
  },
  data () {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      loginType: 0,
      isLoginError: false,
      // 控制忘记密码弹窗
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,

      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  methods: {
    ...mapActions(['Logout']),
    // handler
    handleUsernameOrEmail (rule, value, callback) { // 用户名或邮箱正则
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
    handleSubmit (e) { // 登录
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey
      } = this

      state.loginBtn = true

      const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          sessionStorage.setItem('ACCESS_TOKEN', '4291d7da9005377ec9aec4a71ea837f')
          this.$router.push({ path: '/' })
          // const loginParams = { ...values }
          // delete loginParams.username
          // loginParams[!state.loginType ? 'email' : 'username'] = values.username
          // loginToken({
          //   ...loginParams ,
          //   grant_type: 'password',
          //   scope: 'server',
          // } ,{
          //       'Authorization': 'Basic Y2xvdWR4OmNsb3VkeA=='
          //   }).then(res => {
          //   sessionStorage.setItem('ACCESS_TOKEN', res.access_token)
          //   sessionStorage.setItem('username', values.username)
          //   this.$router.push({ path: '/' })
          // }).catch(err => {
          //   state.loginBtn = false
          // })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },

    handleTabClick (key) { // 切换登录方式
      this.customActiveKey = key
      // this.form.resetFields()
    },
    getCaptcha (e) { // 获取手机验证码
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)
          getSmsCaptcha({ mobile: values.mobile }).then(res => {
            setTimeout(hide, 2500)
            this.$notification['success']({
              message: '提示',
              description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              duration: 8
            })
          // eslint-disable-next-line handle-callback-err
          }).catch(err => {
            setTimeout(hide, 1)
            clearInterval(interval)
            state.time = 60
            state.smsSendBtn = false
          })
        }
      })
    },

    stepCaptchaSuccess () { // 找回密码
      // this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    }
  },
  created () {
    // get2step({ })
    //   .then(res => {
    //     this.requiredTwoStepCaptcha = res.result.stepCode
    //   })
    //   .catch(() => {
    //     this.requiredTwoStepCaptcha = false
    //   })
    // this.requiredTwoStepCaptcha = true
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  .login-input{
    /deep/.ant-input-password-icon{
        color: #fff;
    }
    .ant-input-prefix, .ant-input-suffix{
      i{
        color: #fff!important;
      }
    } 
    /deep/.ant-input{
      background-color: initial;
      color: #fff;
      border-radius: 30px;
    }
    .ant-input:focus{
      background-color:rgba(255, 255, 255, 0.2)
    }
  }
  .login-button{
    background-color: #f96332;
    border: none;
    border-radius: 30px;
  }
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
    color: #f96332;
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
