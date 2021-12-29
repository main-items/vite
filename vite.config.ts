import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      extensions: ['.ts', 'js', '.vue', '.styl', '.json'],
      alias: {
        '@': resolve('src'),
        '@api': resolve('api'),
        '@img': resolve('assets/img'),
        '@config': resolve('config'),
        '@mixins': resolve('mixins'),
        '@router': resolve('router'),
        '@store': resolve('store'),
        '@utils': resolve('utils'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9000,
      cors: true,
      proxy: {
        '/xxxx': {
          target: 'xxxx',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/xxxx/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/assets/styles/variables.styl')}";`,
          },
          javascriptEnabled: true
        }
      }
    },
  }
})
