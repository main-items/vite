<template>
</template>

<script setup lang='ts'>
const route = useRoute()
const router = useRouter()
onMounted(() => {
  let {
    path,
    query
  }: any = route.query;
  router.replace({
    path,
    query: query
      ? JSON.parse(query)
      : {}
  })
})
</script>
<style lang='stylus' scoped>

</style>
