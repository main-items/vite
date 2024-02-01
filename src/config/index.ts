/**
 * @param {{}[]} microApps 微服务属性集合列表
 * @param {string} systemTitle 系统名称
 * @param {string} loadingText 加载时显示文字
 * @param {boolean} progressBar 是否显示顶部进度条
 * @param {'history'|'hash'} routerMode 路由模式，可选值为 history 或 hash
 * @param {string[]} noVerifyRouteList 不经过token校验的路由
 * @param {boolean} recordRoute token失效回退到登录页时是否记录本次的路由
 * @param {string} tokenKey // token 的 key
 * @param {string} tokenFailureRouteKey // token 失效时路由信息记录 key
 * @param {string} noPermissionJump // 无权限跳转
 * @param {string} firstHopRoute // 首跳路由
 * @param {string} userInfoKey // 用户信息 key
 */
export default reactive<{
  [s: string]: any
  // 系统名称
  systemTitle: string
  // 加载时显示文字
  loadingText: string
  // 是否显示顶部进度条
  progressBar: boolean
  // 路由模式，可选值为 history 或 hash
  routerMode: string
  // 不经过token校验的路由
  noVerifyRouteList: string[],
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: boolean,
  // token 的 key
  tokenKey: string
  // token 失效时路由信息记录 key
  tokenFailureRouteKey: string
  // 无权限跳转
  noPermissionJump: string
  // 首跳路由
  firstHopRoute: string
  // 用户信息 key
  userInfoKey: string
  // 导航折叠后宽度
  menuCollapsedWidth: number
  // 导航宽度
  menuWidth: number
}>({
  // 系统名称
  systemTitle: '数据操作系统',
  // 加载时显示文字
  loadingText: '正在加载中...',
  // 是否显示顶部进度条
  progressBar: true,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  // 不经过token校验的路由
  noVerifyRouteList: ['/login', '/404', '/401'],
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  // token 的 key
  tokenKey: 'authorization',
  // token 失效时路由信息记录 key
  tokenFailureRouteKey: 'fallbackRoute',
  // 无权限跳转
  noPermissionJump: '/login',
  // 首跳路由
  firstHopRoute: '/portal',
  // 用户信息 key
  userInfoKey: 'userInfo',
  // 导航折叠后宽度
  menuCollapsedWidth: 80,
  // 导航宽度
  menuWidth: 240,
})
