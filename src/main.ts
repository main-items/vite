import { createApp } from 'vue'

import { qiankunFn, naiveUi } from './utils'
import Api from './api'
import store from './store'
import router from './router'
import App from './App.vue'

import './assets/stylus/Init'

const instance: any = createApp(App)
  .use(Api)
  .use(naiveUi)
  .use(router)
  .use(store)
  .mount('#app')

qiankunFn(instance)
