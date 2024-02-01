<template>
  <NModal
      to=".mainRenderBox"
      :mask-closable="false"
      v-model:show="activeShow">
    <NCard
      style="width: 600px"
      title="个人信息"
      :bordered="false"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <i
          @click="changeShowFn"
          class="main_project_icon-Fork"
        />
      </template>
      <div>
        个人信息
      </div>
    </NCard>
  </NModal>
</template>
<script lang="ts" setup>
const props = defineProps({
  show: { type: Boolean, default: false }
})

const emits = defineEmits(['update:show', 'close'])

const activeShow = computed({
  get: () => props.show,
  set: (nv) => emits('update:show', nv)
})

const changeShowFn = () => {
  activeShow.value = !activeShow.value
  emits('close', activeShow.value)
}
</script>
<style lang="stylus" scoped>

</style>