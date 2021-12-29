<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import config from '@config'
import layout from '@layout'
</script>

<template>
  <n-config-provider :theme-overrides="config.defaultTheme">
    <n-global-style />
    <layout>
      <template v-slot:header ></template>
      <template v-slot:content ></template>
    </layout>
  </n-config-provider>
</template>
