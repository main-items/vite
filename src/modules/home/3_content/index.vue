<template>
  <div id="sub-application"></div>
  <router-view class="router-view" />
</template>

<script setup lang='ts'>
import { qiankunFn } from '@utils'
import * as appStore from '@store'
const appRouter = useRouter()

nextTick(() => {
  qiankunFn({appRouter, appStore, boxId: 'mainRenderBox'})
})
</script>
<style lang='stylus' scoped>
#sub-application,
.router-view{
  padding: 16px 16px 0 16px;
}
#sub-application{
  width: calc(100% - 32px);
  position: absolute;
  left: 0;
  top: 0;
}
.router-view{
  position: relative;
  z-index: 1px;
}
</style>
