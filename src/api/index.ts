import HTTP from '@stroll/http'
import router from '@router'
import {tokenVal} from '@store'
import configConst from '@config'
export const Axios = new HTTP({
  // baseURL: 'https://api.***.com',
  timeout: 300000,
  antiShakeTime: 500,
  PSMSC: '299',
  message: ({message, type}: {message: string, type: string}) => {
    window.$message[type](message)
  },
  unusualFn ({data}: any) {
    const { msg, code} = data
    if ([401, 403].includes(code)) {
      const {
        noPermissionJump
      } = configConst
      window.$message.warning(msg)
      router.push({ path: noPermissionJump })
    }
  },
  reqFn (config: any) {
    const {
      tokenKey,
      userInfoKey
    } = configConst
    config.headers[tokenKey] = localStorage.getItem(tokenKey)||tokenVal.value
    config.headers[userInfoKey] = localStorage.getItem(userInfoKey)
  }
})

export const userApi: any = {}

const apiFiles: any = import.meta.glob(
  './**/*.api.ts',
  {
    eager: true
  }
)

Object.keys(apiFiles).forEach((key) => {
  const api = apiFiles[key].default
  const urlArr = key.split("/");
  const apiKey = urlArr[urlArr.length - 1].split(".")[0];
  userApi[apiKey] = api
})

export default {
  install: (Vue: any) => {
    const {provide} = Vue
    Object.keys(userApi).forEach((key: string) => {
      provide(`$${key}Api`, userApi[key])
    })
  }
}