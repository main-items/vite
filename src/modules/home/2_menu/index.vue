<template>
<div class="logo-box">
  <NPopover to=".mainRenderBox" trigger="hover">
    <template #trigger>
      <i
        :class="`menu-logo mt16 mb4 ${logoIconClass}`"
        @click="toPortal"
      />
    </template>
    <span>门户</span>
  </NPopover>
  
  <div
    :class="{
      'pb20': true,
      hide: collapsed
    }"
  >{{config.systemTitle}}</div>
  <NPopover to=".mainRenderBox" trigger="hover">
    <template #trigger>
      <i
        :class="{
          'main_project_icon-left': !collapsed,
          'main_project_icon-right': collapsed,
          'menu-switch': true,
        }"
        @click="onCollapsedFn"
      ></i>
    </template>
    <span>{{collapsed?'展开':'收起'}}</span>
  </NPopover>
</div>
<NScrollbar class="bcf mt8 pb8" :style="{
  height: 'calc(100vh - 130px)',
  boxShadow: '1px 2px 3px 0px rgba(57, 58, 122, 0.1)'
}">
  <NMenu
    :collapsed="collapsed"
    :collapsed-width="60"
    :options="menuOptions"
    v-model:value="activeKey"
    @update:value="onUpdateValue"
    class="pl10 pr10"
  />
</NScrollbar>
</template>

<script setup lang='ts'>
import config from '@config'
const commonStyle: any = useThemeVars()

const props = defineProps({
  logoIconClass: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array<any>,
    default: () => ([])
  }
})

const emits = defineEmits([
  'update:collapsed',
  'portal',
  'update:value'
])

const activeKey = computed(() => props.value)
const collapsed = computed({
  get: () => props.collapsed,
  set: (val) => emits('update:collapsed', val)
})
const menuOptions = computed<any[]>(() => props.options)
const logoIconClass = computed(() => props.logoIconClass)

const onCollapsedFn = () => {
  collapsed.value = !collapsed.value
}

const toPortal = () => emits('portal')
const onUpdateValue = (key: string|number, item: any) => emits('update:value', key, item)
</script>
<style lang='stylus' scoped>

.logo-box{
  text-align: center;
  background-color: v-bind('commonStyle.selectedColor');
  position: relative;
  height: 114px;
  .menu-logo{
    font-size: 40px;
    color: #FFFFFF;
    cursor: pointer;
  }
  div{
    opacity: 1;
    font-size: 20px;
    height: 28px;
    overflow: hidden;
    line-height: 28px;
    color: #FFFFFF;
    transition: all .5s;
    white-space: nowrap;
    transform: scale(1);
  }
  .hide{
    opacity: 0;
    transform: scale(.1);
  }
  .menu-switch{
    position: absolute;
    cursor: pointer;
    bottom: -12px;
    right: 12px;
    z-index: 1;
    font-size: 28px;
    text-indent: -2px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    color: #FFFFFF;
    background-color: v-bind('commonStyle.selectedColor');
    transition: all .3s;
    box-shadow: 0px 4px 10px 0px v-bind('commonStyle.boxShadowColor');
    &:hover{
      transform: v-bind('commonStyle.textHoverSize'); // rotateY(360deg)
      box-shadow: 0px 1px 18px 0px v-bind('commonStyle.textHoverColor');
    }
  }
}
</style>