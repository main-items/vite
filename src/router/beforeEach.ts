import {tokenVal, activeKey} from '@store'
import config from '@config'
const {
  tokenKey,
  noPermissionJump,
  tokenFailureRouteKey,
  noVerifyRouteList,
  firstHopRoute
} = config

function jump (to: any, from: any, next: any) {
  const {path: toPath, query: toQuery} = to
  const {path: fromPath, query: fromQuery} = from
  const isNoVerifyRoute = noVerifyRouteList.includes(toPath)
  const FailureRouteInfo = fromPath&&(fromPath!==noPermissionJump)
    ? JSON.stringify({
        path: fromPath,
        query: fromQuery
      })
    : isNoVerifyRoute
      ? undefined
      : JSON.stringify({
          path: toPath,
          query: toQuery
        })
  FailureRouteInfo && sessionStorage.setItem(tokenFailureRouteKey, FailureRouteInfo)
  if (isNoVerifyRoute) {
    next()
  } else next(noPermissionJump)
}

export default (to: any, from: any, next: any) => {
  const authorization = localStorage.getItem(tokenKey)||tokenVal.value
  activeKey.value = to.path
  if (!authorization) jump(to, from, next)
  else {
    if (to.path === noPermissionJump) {
      let FailureRouteInfo = sessionStorage.getItem(tokenFailureRouteKey)
      FailureRouteInfo = FailureRouteInfo?JSON.parse(FailureRouteInfo):null
      next(FailureRouteInfo||firstHopRoute)
    } else next()
  }
}
