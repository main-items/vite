<template>
  <STabs
    v-model:value="modelValue"
    valueField="key"
    labelField="name"
    :options="tabOptions"
  />
  <STeps
    v-model:value="modelValue"
    :options="tepOptions"
  />
</template>

<script setup lang='ts'>
import {
  tepOptions,
  tabOptions
} from '.'
const modelValue = ref('2')

</script>
<style lang='stylus' scoped>

</style>
