<template>
<NDropdown
  :trigger="trigger"
  :options="options"
  :key-field="valueField"
  :label-field="labelField"
  :children-field="childrenField"
  @select="handleSelect"
><NButton
    style="height: calc(100%);"
    class="ml24"
    color="#FFFFFF"
    size="large"
    text>
  <template #icon>
    <i class="main_project_icon-system" />
  </template>
  {{currentDropdown}}
</NButton></NDropdown>
</template>

<script setup lang='ts'>
import { HTMLAttributes, VNodeChild } from 'vue';

const currentDropdown = ref('')

/**
 * props 参数
 * @param value 当前唯一标识
 * @param options 选项可用参数
 * @param valueField 唯一标识字段名
 * @param labelField 展示的字段名
 * @param childrenField 子集的字段名
 * @param trigger 触发方式
 */
const props: any = defineProps({
  /**当前唯一标识 */
  value: {
    type: String||Number,
    default: ''
  },
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
  }
})
const emits = defineEmits(['update:value', 'select'])
const currentDropdownMark: any = computed({
  get: () => props.value,
  set: (val) => {
    emits('update:value', val)
    getCurrentDropdown(val)
  }
})
const options: any = computed(() => props.options)
const valueField = computed(() => props.valueField)
const labelField = computed(() => props.labelField)
const getCurrentDropdown = (val?: string|number) => {
  val = val || currentDropdownMark.value
  if (Array.isArray(options.value) && options.value.length && val) {
    options.value.forEach((item: any) => {
      if (item[valueField.value] === val) {
        currentDropdown.value = item[labelField.value]
      }
    })
  }
}
getCurrentDropdown()
const handleSelect = (value: number|string, option: any) => {
  currentDropdownMark.value = value
  emits('select', value, option)
}

</script>
<style lang='stylus' scoped>

</style>