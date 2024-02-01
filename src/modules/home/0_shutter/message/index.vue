<template>
  <NDrawer height="90%" to=".mainRenderBox" v-model:show="activeShow" placement="bottom">
    <NDrawerContent title="消息" closable>
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </NDrawerContent>
  </NDrawer>
</template>
<script lang="ts" setup>
const props = defineProps({
  show: { type: Boolean, default: false }
})

const emit = defineEmits(['update:show'])

const activeShow = computed({
  get: () => props.show,
  set: (nv) => emit('update:show', nv)
})
</script>
<style lang="stylus" scoped>

</style>