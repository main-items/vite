import { createApp } from 'vue'

import Router from './router'
import Api from './api'
import Plugins from './plugins'
import App from './App.vue'

import './assets/stylus/Init.styl'
import './assets/stylus/rewriteStyle.styl'
import './assets/stylus/variables.styl'
import './assets/iconfont/iconfont.css'

const instance: any = createApp(App)
instance.use(Api)
instance.use(Plugins)
instance.use(Router)
instance.mount('#new-main-project')
