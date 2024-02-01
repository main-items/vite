const children: any = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", weight: 1, show: true, roles: [] },
    component: () =>
      import(/* webpackChunkName: 'login' */ "./index.vue")
  },
]

export default children
