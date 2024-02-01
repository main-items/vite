import {
  registerMicroApps,
  start,
  setDefaultMountApp
} from 'qiankun'
import {
  apps,
  systemLoading
} from './params'

export const qiankunFn = (instance?: any) => {
  registerMicroApps(apps(instance), {
    beforeLoad: (app: any): any => {
      systemLoading.value = true
      // console.log("before load app.name====>>>>>", app.name);
    },
    beforeMount: [
      (app: any): any => {
        // console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      }
    ],
    afterMount: [
      (app: any): any => {
        systemLoading.value = false
        // console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
      }
    ],
    afterUnmount: [
      (app: any): any => {
        systemLoading.value = false
        // console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
      }
    ]
  })
  // setDefaultMountApp("/assetCatalog");
  start() // { prefetch: false, singular: true }
}

export default qiankunFn
