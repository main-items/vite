<template>
<NSpin :show="systemLoading"> 
  <NLayout has-sider>
    <NLayoutSider
      collapse-mode="width"
      :collapsed-width="config.menuCollapsedWidth"
      :width="config.menuWidth"
      :collapsed="collapsed"
      style="background-color: #FFFFFF;"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <slot name="menu">
        导航区域
      </slot>
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader id="layout-header-box">
        <slot name="header">
          头部区域
        </slot>
      </NLayoutHeader>
      <NLayoutContent :style="{
        position: 'relative',
        height: `calc(100% - ${heightOffset}px)`
      }">
        <slot name="content">
          内容区域
        </slot>
      </NLayoutContent>
    </NLayout>
  </NLayout>
  <template #description>
    系统载入中。。。
  </template>
</NSpin>
</template>

<script lang="ts" setup name="layout">
import {
  observeEl
} from '@stroll/web-tools'
import config from '@config'
import {
  systemLoading
} from '@utils/qiankun/params'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const heightOffset = ref(0)

const collapsed = computed(() => props.collapsed)

const initCurrentDataLayer = () => {
  const layoutHeaderBoxEl = document.getElementById('layout-header-box') as HTMLElement
  if (layoutHeaderBoxEl && layoutHeaderBoxEl.clientHeight) {
    const {
      clientHeight = 0
    } = layoutHeaderBoxEl as HTMLElement
    heightOffset.value = clientHeight
  }
}
let elChange: any = null

nextTick(() => {
  const layoutHeaderBoxEl = document.getElementById('layout-header-box') as HTMLElement
  elChange = layoutHeaderBoxEl ? observeEl.start(
    layoutHeaderBoxEl,
    initCurrentDataLayer
  ) : undefined
})
onBeforeUnmount(() => {
  if (elChange) {
    elChange.end()
    elChange = null
  }
})

</script>

<style lang="stylus" scoped>

</style>
