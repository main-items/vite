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
        '@api': resolve('src/api'),
        '@img': resolve('src/assets/img'),
        '@config': resolve('src/config'),
        '@mixins': resolve('src/mixins'),
        '@router': resolve('src/router'),
        '@store': resolve('src/store'),
        '@utils': resolve('src/utils'),
        '@layout': resolve('src/layout'),
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
    }
  }
})
