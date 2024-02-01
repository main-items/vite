const routerFiles: any = import.meta.glob(
  './../modules/**/router.ts',
  {
    eager: true
  }
)
let routes: any = []
Object.keys(routerFiles).forEach((key) => {
  const routerArr = routerFiles[key].default
  routes = routes.concat(routerArr)
})

export default routes
