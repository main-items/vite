import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

import store from './store'
import route from './router'
import Api from './api'
import microApps from './micro-app'
import utils from './utils'
import App from './App.vue'

const { routes, beforeEach, afterEach } = route
const { naive } = utils
  
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
  .use(naive)
  .use(router)
  .use(store)
  .mount('#app')

function loader(loading: any) {
  if (instance.isLoading) {
    instance.isLoading = loading
  }
}
// 给子应用配置加上loader方法
const apps = microApps.map((item: any) => {
  return {
    ...item,
    loader
  }
})
registerMicroApps(apps, {
  beforeLoad: (app): any => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app): any => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    }
  ],
  afterMount: [
    (app): any => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    }
  ],
  afterUnmount: [
    (app): any => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    }
  ]
})
// setDefaultMountApp("/bigdata-vite");
start()