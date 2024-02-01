
import JsEncrypt from 'jsencrypt'
import $cookies from '@plugins/cookie'
import router from '@router'
import config from '@config'
import userApi from './api'

import {
  expireTime,
  isRememberPassword,
  currentFocus,
  model,
  dockingKey,
  publicKey,
  loginAccountMD5,
  passwordMD5,
  rememberPasswordMD5,
} from '.'

const dockingEncryptor = new JsEncrypt()
const localEncryptor = new JsEncrypt()

export const JSEncrypt = JsEncrypt
export const login = async () => {
  dockingEncryptor.setPublicKey(dockingKey)
  const password = dockingEncryptor.encrypt(model.password)
  const data = { ...model, password }
  return userApi.postLogin(data).then((res: any)=>{
    if (isRememberPassword.value) {
      localEncryptor.setPublicKey(publicKey)
      $cookies.setItem(loginAccountMD5, localEncryptor.encrypt(model.loginAccount), expireTime)
      $cookies.setItem(passwordMD5, localEncryptor.encrypt(model.password), expireTime)
      $cookies.setItem(rememberPasswordMD5, localEncryptor.encrypt(isRememberPassword.value), expireTime)
    }
    setTimeout(() => {
      const {
        tokenFailureRouteKey,
        firstHopRoute
      } = config
      // const { origin } = location
      // window.location.href = origin
      console.log('router', router.currentRoute.value)
      let FailureRouteInfo = sessionStorage.getItem(tokenFailureRouteKey)
      FailureRouteInfo = FailureRouteInfo?JSON.parse(FailureRouteInfo):null
      router.replace(FailureRouteInfo||firstHopRoute)
    }, 20)
    return res
  }).catch((err: any)=>{
    console.log(err);
  })
}

export const onBlurFn = (type: string) => {
  currentFocus.value = ''
}
export const onFocusFn = (type: string) => {
  currentFocus.value = type
}