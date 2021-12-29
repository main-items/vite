<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <navigation />
      </n-layout-sider>
      <n-layout>
        <slot name="header">
          <header />
        </slot> 
        <slot name="content">
          <div class="ml20 mr20">
            <content />
          </div>
        </slot> 
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup name="layout">
import { NSpace, NLayout, NLayoutSider } from 'naive-ui'
import navigation from './navigation.vue'
import header from './header.vue'
import content from './content.vue'
import { collapsed, activeKey } from './ref'
</script>