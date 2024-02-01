import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {resolve} from "path"

const { name } = require('./package')
const proxyList = [
  {
    key: [
      '^/model-transform',
      '^/upms-server',
      '^/datamap-dataassets-server'
    ],
    value: {
      target: 'http://10.0.2.205:31080/',
      changeOrigin: true,
      ws: true,
      // rewrite: (path) => path.replace(/^\/xxxx/, ''),
    }
  }
]
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const variable: any = {}
  Object.keys(env).forEach(key => {
    const val = env[key]
    if (['true', 'false'].includes(val))
      variable[key] = val === 'true'
    else
      variable[key] = val
  })
  let proxy: {[s: string]: any} = {}
  proxyList.forEach((item) => {
    if (typeof item.key === 'string') {
      proxy[item.key] = item.value
    } else if (Array.isArray(item.key)) {
      item.key.forEach((key) => {
        proxy[key] = item.value
      })
    }
  })
  return {
    base: variable.VITE_base,
    plugins: [
      vue(),
      vueJsx(),
      vueSetupExtend(),
      AutoImport({
        /** 改造目标 */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        /**
         * 自动导入目录下的模块导出
         * 默认只扫描目录下的一级模块
         */
        dirs: [
          // './composables', // 仅根模块
          // './composables/**', // 所有嵌套模块
        ],
        /**
         * 生成对应 .d.ts 文件的文件路径
         * 当 `t​​ypescript` 在本地安装时，默认为 './auto-imports.d.ts'
         * 设置 `false`为将禁用
         */
        dts: './auto-imports.d.ts',
        /** 自定义解析器，与 `unplugin-vue-components` 兼容 */
        resolvers: [],
        /** 生成对应的 .eslintrc-auto-import.json 文件 */
        eslintrc: {
          enabled: false, // 默认 `false`
          filepath: './.eslintrc-auto-import.json', // 默认 `./.eslintrc-auto-import.json`
          globalsPropValue: true, // 默认 `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        /** 进口登记 */
        imports: [
          'vue',
          'vuex',
          'vue-router',
          {
            'naive-ui': [
              'NGrid',
              'NGi',
              'NTree',
              'NInput',
              'NInputGroup',
              'NInputGroupLabel',
              'NDropdown',
              'NButton',
              'NSwitch',
              'NTooltip',
              'NTag',
              'NPopover',
              'NPopconfirm',
              'NEllipsis',
              'NSpace',
              'NCheckboxGroup',
              'NCheckbox',
              'NRadioGroup',
              'NRadioButton',
              'NRadio',
              'useDialog',
              'useMessage',
              'useNotification',
              'NGlobalStyle',
              'useLoadingBar',
              'useThemeVars',
              'useOsTheme'
            ],
          },
        ],
      }),
      Components({
        /** 生成“components.d.ts”全局声明 */
        dts: true,
        /** 搜索子目录 */
        deep: true,
        /** 允许子目录作为组件的命名空间前缀 */
        directoryAsNamespace: false,
        /**
         * 忽略命名空间前缀的子目录路径
         * 当 `directoryAsNamespace: true` 时有效
         */
        globalNamespaces: [],
        /** 用于搜索组件的目录的相对路径 */
        dirs: ['src/components'],
        /** 组件的有效文件扩展名 */
        extensions: ['vue'],
        /**
         * 自动导入指令
         * 默认值：Vue 3 为 `true`，Vue 2 为 `false`
         * 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认禁用。
         * 要安装 Babel，请运行：`npm install -D @babel/parser`
         */
        directives: true,
        /** 解析前变换路径 */
        importPathTransform: v => {
          return v
        },
        /** 允许组件覆盖其他同名组件 */
        allowOverrides: false,
        /** 用于转换目标的过滤器 */
        include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
        /** TypeScript 不友好的在此导入 */
        types: [{
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        }],
        /** 组件的解析器 */
        resolvers: [NaiveUiResolver()],
      }),
    ],
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.jsx',
        '.vue',
        '.styl',
        '.json'
      ],
      alias: {
        '@': resolve('src'),
        '@types': resolve('src/types'),
        '@api': resolve('src/api'),
        '@img': resolve('src/assets/img'),
        '@config': resolve('src/config'),
        '@mixins': resolve('src/mixins'),
        '@router': resolve('src/router'),
        '@store': resolve('src/store'),
        '@utils': resolve('src/utils'),
        '@plugins': resolve('src/plugins'),
        '@theme': resolve('src/theme'),
        '@layout': resolve('src/layout'),
        '@mainPage': resolve('src/layout/main/index.vue'),
        '@modules': resolve('src/modules'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8008,
      cors: true,
      open: true,
      proxy,
    },
    optimizeDeps: {
      include: []
    },
    build: {
      outDir: 'dist',
      minify: 'terser',
      commonjsOptions: {
        include: [/node_modules/]
      }
    },
    define: {
      'process.env': variable
    }
  }
})
