import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

import store from './store'
import route from './router'
import Api from './api'
import microApps from "./micro-app"
import App from './App.vue'

const { routes, beforeEach, afterEach } = route
  
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

const instance = createApp(App)
  .use(Api)
  .use(router)
  .use(store)
  .mount('#app')

function loader(loading) {
  if (instance.isLoading) {
    instance.isLoading = loading
  }
}
// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})
registerMicroApps(apps, {
  beforeLoad: app => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    app => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    }
  ],
  afterMount: [
    app => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    }
  ]
})
// setDefaultMountApp("/bigdata-vite");
start()
