import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Api from './api'
import store from './store'
import { routes, beforeEach, afterEach } from './router'
import { qiankunFn, naiveUi } from './utils'
import App from './App.vue'

import './assets/stylus/Init'
  
const router = createRouter({
  history: createWebHistory('/'),
  routes
})
router.beforeEach((to, from, next) => {
  beforeEach(to, from, next)
})
router.afterEach(() => {
  afterEach()
})

const instance: any = createApp(App)
  .use(Api)
  .use(naiveUi)
  .use(router)
  .use(store)
  .mount('#app')

qiankunFn(instance)
