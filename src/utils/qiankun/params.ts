const environment = process.env.VITE_ENV === 'production'
/** 系统加载状态 */
export const systemLoading = ref(false)

const microApps: any = [
  {
    name: 'dataSync',
    devPort: 9096,
  }
]

export const apps: any = (props: any) => {
  return microApps.map((item: any) => {
    const {name, devPort} = item
    let { protocol, hostname, port } = location
    if (!environment) {
      port = devPort || ''
    }
    const activeRule = `/${name}`
    return {
      name,
      base: name,
      entry: `${protocol}//${hostname}${
        port ? `:${port}` : ''
      }${
        environment ? activeRule : ''
      }`,
      activeRule,
      container: "#sub-application", // 子应用挂载的div
      props,
    }
  })
}

export default apps
