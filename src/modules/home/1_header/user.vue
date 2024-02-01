<template>
<div style="height: 66px;">
  <div class="lf">
    <slot name="default"></slot>
  </div>
  <NDropdown
      :trigger="trigger"
      :options="options"
      :key-field="valueField"
      :label-field="labelField"
      :children-field="childrenField"
      @select="handleSelect">
    <NButton
        :color="color"
        size="tiny"
        type="info"
        class="lf pl22 pr24 mt20"
        text>
      <template #icon>
        <img class="main_project_head-portrait" src="@img/nan_028.jpeg" alt="">
        <!-- <i class="main_project_icon-user" /> -->
      </template>
      <span class="ml10">{{userName}}</span>
    </NButton>
  </NDropdown>
  <div class="cb"></div>
</div>
</template>

<script setup lang='ts'>
import { HTMLAttributes, VNodeChild } from 'vue';
const commonStyle: any = useThemeVars()

/**
 * props 参数
 * @param options 选项可用参数
 * @param valueField 唯一标识字段名
 * @param labelField 展示的字段名
 * @param childrenField 子集的字段名
 * @param trigger 触发方式
 */
const props: any = defineProps({
  /**选项可用参数
   * @param children 子集的 children 项
   * @param disabled 是否禁用
   * @param icon 支持通过 render 方法自定义 icon
   * @param key 需要唯一
   * @param label 显示的 label 值
   * @param props 自定义选项属性
   * @param show 是否展示选项
  */
  options: {
    type: Array as PropType<{
      [s:string]: any
      label?: string|(() => VNodeChild)
      value?: string|number
      children?: any[]
      disabled?: boolean
      icon?():VNodeChild
      props?: HTMLAttributes
      show?: boolean
      fn?(value: string|number, option: any):void
    }[]>,
    default: () => ([])
  },
  /**唯一标识字段名 */
  valueField: {
    type: String,
    default: 'value'
  },
  /**展示的字段名 */
  labelField: {
    type: String,
    default: 'label'
  },
  /**子集的字段名 */
  childrenField: {
    type: String,
    default: 'children'
  },
  /**
   * 触发方式
   * @var 'hover'|'click'|'focus'|'manual'
   */
   trigger: {
    type: String as PropType<'hover'|'click'|'focus'|'manual'>||undefined,
  },
  /**
   * 用户名
   * @var 'hover'|'click'|'focus'|'manual'
   */
  userName: {
    type: String,
    default: 'user'
  },
  color: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['select'])
const options: any = computed(() => props.options)
const valueField = computed(() => props.valueField)
const labelField = computed(() => props.labelField)
const userName = computed(() => props.userName)
const handleSelect = (value: number|string, option: any) => {
  option.fn&&option.fn(value, option)
  emits('select', value, option)
}

defineExpose({})
</script>
<style lang='stylus' scoped>
.main_project_head-portrait{
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 36%;
  background: linear-gradient(
    to right,
    rgba(17, 120, 229, .72),
    rgba(63, 184, 167, .72)
  )
}
.main_project_icon-user{
  font-size: 24px;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 27px;
  border: 1.5px solid #FFFFFF;
  border-radius: 50%;
  padding: 0 3px;
  background: linear-gradient(
    to right,
    rgba(17, 120, 229, .72),
    rgba(63, 184, 167, .72)
  )
}
</style>