<template>
<div class="login-box text-no">
  <div class="login-info">
    <ul>
      <li class="logo-text-img mb60">
        <i
          class="mr12 main_project_icon-logo_mark"
        />
        <span
        >{{config.systemTitle}}</span>
        <div class="cb"></div>
      </li>
      <li :class="`mb30 input ${currentFocus === 'Account'?'current-focus':''}`">
        <NInput
            v-model:value="model.loginAccount"
            type="text"
            autofocus
            placeholder="请输入账号"
            @blur="onBlurFn('Account')"
            @focus="onFocusFn('Account')"
            @keydown.enter.prevent>
          <template #prefix>
            <i :class="`main_project_icon-user ${currentFocus === 'Account'?'current-focus':''}`" />
          </template>
        </NInput>
      </li>
      <li :class="`input ${
        currentFocus === 'Password'
          ? 'current-focus'
          : ''
        }`">
        <NInput
            v-model:value="model.password"
            type="password"
            placeholder="请输入账号"
            show-password-on="mousedown"
            @blur="onBlurFn('Password')"
            @focus="onFocusFn('Password')"
            @keydown.enter.prevent>
          <template #prefix>
            <i :class="`main_project_icon-lock ${
              currentFocus === 'Password'
                ? 'current-focus'
                : ''
            }`" />
          </template>
          <template #password-visible-icon>
            <i class="main_project_icon-eyes_open" />
          </template>
          <template #password-invisible-icon>
            <i class="main_project_icon-eyes_closed" />
          </template>
        </NInput>
      </li>
      <li>
        <NButton
          ghost class="login-fn mt40"
          @click="loginFn"
        >登录</NButton>
        <NCheckbox
          v-model:checked="isRememberPassword"
          checked-value="1"
          unchecked-value="0"
          size="small"
          class="remember_password"
          label="记住密码" />
        <a class="forget-the-password">忘记密码</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import config from '@config'
import {
  isRememberPassword,
  currentFocus,
  model,
  privateKey,
  loginAccountMD5,
  passwordMD5,
  rememberPasswordMD5,
} from './index'
import {
  login,
  onBlurFn,
  onFocusFn,
  JSEncrypt,
} from './event'

localStorage.clear()
sessionStorage.clear()

const localEncryptor = new JSEncrypt()

const router = useRouter()
const $cookies: any = inject('$cookies')
const commonStyle: any = useThemeVars()

const loginFn = () => login()

const loginAccount = $cookies.getItem(loginAccountMD5)
const password = $cookies.getItem(passwordMD5)
const rememberPassword = $cookies.getItem(rememberPasswordMD5)
localEncryptor.setPrivateKey(privateKey)
if (loginAccount) {
  model.loginAccount = localEncryptor.decrypt(loginAccount)
}
if (password) {
  model.password = localEncryptor.decrypt(password)
}
isRememberPassword.value = rememberPassword?localEncryptor.decrypt(rememberPassword):null
if (!['0', '1'].includes(isRememberPassword.value)) {
  isRememberPassword.value = '0'
}

</script>

<style scoped lang="stylus">
.login-box{
  height: calc(100%);
  background-image: url('@img/login_bei_jing.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  .login-info{
    background: linear-gradient(
      to bottom,
      rgba(245, 196, 129, .7),
      rgba(117, 193, 243, 7)
    );
    width: 480px;
    height: 420px;
    padding: 60px 40px;
    border-radius: 16px;
    position: absolute;
    margin-top: -260px;
    top: 50%;
    right: 9%
    .logo-text-img{
      text-align: center;
      i{
        font-size: 48px;
        color: #FFFFFF;
        line-height: 48px;
      }
      span{
        font-size: 24px;
        color: #FFFFFF;
        line-height: 48px;
        position relative;
        top: -8px;
      }
    }
    ul{
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      li{
        // background-color: rgba(255,255,255, .7);
      }
      .input{
        border-bottom: 1px solid rgba(255, 255, 255, 1)
      }
      .current-focus{
        border-color: v-bind('commonStyle.activeColor');
        color: v-bind('commonStyle.activeColor');
      }
      .main_project_icon-eyes_open{
        color: v-bind('commonStyle.activeColor');
      }
      .login-fn{
        color: #FFFFFF;
        width: calc(100%);
        border: 1px solid;
        border-radius: 4px;
        border-image-source: linear-gradient(
          to right,
          rgba(17, 120, 229, .81),
          rgba(63, 184, 167, .81)
        );
        border-image-slice: 1;
        background: linear-gradient(
          to right,
          rgba(17, 120, 229, .72),
          rgba(63, 184, 167, .72)
        );
      }
    }
    .remember_password,
    .forget-the-password{
      position: absolute;
      
      bottom: -28px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #FFFFFF;
    }
    .remember_password{
      left: 0px;
    }
    .forget-the-password{
      right: 0;
    }
  }
  [class*=main_project_icon-]{
    color: #FFFFFF;
  }
}
</style>
