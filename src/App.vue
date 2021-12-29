<script setup>
import { NConfigProvider, NGlobalStyle, NThemeEditor } from 'naive-ui'
</script>

<template>
  <n-config-provider>
    <router-link :to="{ path: '/' }" >首页</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{ path: '/overview' }" >概览</router-link>
    <router-view></router-view>
    <div id="cnbi-viewport"></div>
    <n-global-style />
    <n-theme-editor />
  </n-config-provider>
</template>
