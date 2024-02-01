const children: any = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页", weight: 1, show: true, roles: [] },
    component: () =>
      import(/* webpackChunkName: 'Home' */ "./home/index.vue"),
    children: [
      {
        path: "/401",
        name: "401",
        meta: { title: "权限过期", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'system' */ "./system/401/index.vue")
      },
      {
        path: "/403",
        name: "403",
        meta: { title: "没有权限", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'system' */ "./system/403/index.vue")
      },
      {
        path: "/404",
        name: "404",
        meta: { title: "未找到资源", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'system' */ "./system/404/index.vue")
      },
      {
        path: "/test",
        name: "Test",
        meta: { title: "测试", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'system' */ "./system/test/index.vue")
      },
      {
        path: "/overload",
        name: "Overload",
        meta: { title: "系统", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'system' */ "./system/overload/index.vue")
      },
      {
        path: ":catchAll(.*)",
        name: "*",
        meta: { title: "*", weight: 1, show: true, roles: [] },
        component: () =>
          import(/* webpackChunkName: 'Home' */ "./system/index.vue"),
      }
    ]
  },
]

export default children
