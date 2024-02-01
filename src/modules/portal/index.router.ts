const children: any = [
  {
    path: "/portal",
    name: "Portal",
    meta: { title: "门户", weight: 1, show: true, roles: [] },
    component: () =>
      import(/* webpackChunkName: 'portal' */ "./index.vue")
  },
]

export default children
