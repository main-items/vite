<template>
<div class="header-breadcrumb-box">
  <i class="ml20 main_project_icon-location"></i>
  <span class="ml8 header-breadcrumb-explanation">您的位置：</span>
  <NBreadcrumb :separator="separator" class="header-breadcrumb">
    <NBreadcrumbItem
      v-for="(item,index) in options"
      :key="index"
      @click="() => {
        item.fn&&item.fn(item[valueField], item)
        onTriggerFn(item[valueField], item)
      }"
      :separator="item.separator||separator"
      :clickable="[true, false].includes(item.clickable)?item.clickable:true"
    >{{item[labelField]}}</NBreadcrumbItem>
  </NBreadcrumb>
</div>
</template>

<script setup lang='ts'>
const commonStyle: any = useThemeVars()
/**
 * props 参数
 * @param separator 分隔符
 * @param options 选项可用参数
 * @param valueField 唯一标识字段名
 * @param labelField 展示的字段名
 */
const props: any = defineProps({
  /**分隔符 */
  separator: {
    type: String,
    default: '/'
  },
  /**选项可用参数
   * @param clickable 是否可点击
   * @param href 链接地址
   * @param separator 项之间的分隔符
  */
  options: {
    type: Array as PropType<{
      [s:string]: any
      label?: string
      value?: string|number
      href?: string
      clickable?: boolean
      separator?: string
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
  }
})
const emits = defineEmits(['select'])
const options: any = computed(() => props.options)
const valueField = computed(() => props.valueField)
const labelField = computed(() => props.labelField)
const onTriggerFn = (value: number|string, item: any[]) => {
  emits('select', value, item)
}
</script>
<style lang='stylus' scoped>
.header-breadcrumb-box{
  height: 48px;
  background-color: #FFFFFF;
  border-top-left-radius: 8px;
  .main_project_icon-location,
  .header-breadcrumb-explanation,
  .header-breadcrumb{
    display: inline-block;
  }
  .main_project_icon-location{
    color: v-bind('commonStyle.selectedColor');
    position: relative;
    top: 1px;
  }
  .header-breadcrumb-explanation{
    color: #3F5779;
    height: 48px;
    line-height: 48px;
  }
  .header-breadcrumb{
  }
}
</style>