import { createApp } from 'vue'

import { qiankunFn, naiveUi } from './utils'
import Api from './api'
import store from './store'
import router from './router'
import App from './App.vue'

import './assets/stylus/Init'
import './assets/icon/iconfont.css'

const instance: any = createApp(App)
instance.use(Api)
instance.use(naiveUi)
instance.use(router)
instance.use(store)
instance.mount('#<%= packageName %>')

qiankunFn(instance)
