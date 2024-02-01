import {docCookies} from './cookie'

export default {
  install (Vue: any) {
    Vue.provide('$cookies', docCookies)
  }
}