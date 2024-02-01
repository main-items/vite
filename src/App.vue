<template>
<NConfigProvider
  :locale="zhCN"
  :date-locale="dateZhCN"
  :theme-overrides="Theme.default"
  preflight-style-disabled>
  <NDialogProvider>
    <NMessageProvider>
      <div class="mainRouterBox">
        <router-view />
      </div>
      <div class="mainRenderBox" id="mainRenderBox"></div>
    </NMessageProvider>
  </NDialogProvider>
  <NGlobalStyle />
</NConfigProvider>
</template>
<script lang="ts" setup>
import { zhCN, dateZhCN } from 'naive-ui'
import Theme from '@theme'
</script>
<style lang="stylus" scoped>
.mainRouterBox{
  height: calc(100%);
}
</style>