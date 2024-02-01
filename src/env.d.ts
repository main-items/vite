// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'jsencrypt'
declare module 'md5'
declare interface Window {
  /** 子项目实例 */
  $message: {
    error(s: string, config?: {[s:string]: unknown}): unknown
    warning(s: string, config?: {[s:string]: unknown}): unknown
    success(s: string, config?: {[s:string]: unknown}): unknown
    loading(s: string, config?: {[s:string]: unknown}): unknown
    info(s: string, config?: {[s:string]: unknown}): unknown
  }|any
}

declare interface ImportMeta {
  globEager: any
  glob: any
}
