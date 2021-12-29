<script setup>
import { NConfigProvider } from 'naive-ui'
</script>

<template>
<NConfigProvider>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <p></p>
  <router-link :to="{ path: '/' }" >首页</router-link>
  &nbsp;&nbsp;&nbsp;
  <router-link :to="{ path: '/overview' }" >概览</router-link>
  <router-view></router-view>
  <div id="cnbi-viewport"></div>
</NConfigProvider>
</template>



<style>

</style>
