<template>
<div class="step_bar text-no" id="step_bar" :style="`
  --selected-color: ${commonStyle.selectedColor},
`">

  <div
      v-for="(item, index) in options"
      :key="index"
      :class="{
        'step': true,
        'current-step': currentValue === item[valueField],
        'current-before-step': currentValue > item[valueField]
      }"
      :style="{
        width: `calc((100% - 360px) / ${options.length})`,
        minWidth: '149px'
      }">
    <span
      v-if="currentValue > item[valueField]"
      class="step-mark"
    ><span><i></i></span></span>
    <span
      v-else
      class="step-mark"
    >{{ item[valueField] }}</span>
    <span
      class="step-name ml8"
    >{{ item[labelField] }}</span>
    <div :class="{
      'direction': index < (options.length - 1),
      'current-step': currentValue === item[valueField],
      'current-before-step': currentValue > item[valueField],
    }"></div>
  </div>
</div>

</template>

<script setup lang="ts">
import{
  styleVar
} from '.'

const commonStyle: any = useThemeVars()
Object.keys(styleVar).forEach((key: string) => {
  if (!commonStyle.value[key]) {
    commonStyle.value[key] = styleVar[key]
  }
})

const props: any = defineProps({
  value: {
    type: String||Number,
    default: ''
  },
  options: {
    type: Array,
    default: () => ([])
  },
  valueField: {
    type: String,
    default: 'value'
  },
  labelField: {
    type: String,
    default: 'label'
  }
})
const emits = defineEmits(['update:value'])
const valueField = computed(() => props.valueField)
const labelField = computed(() => props.labelField)
const options: any = computed(() => props.options)
const currentValue = computed({
  get: () => {
    if (![null, undefined].includes(props.value)) return props.value
    if (Array.isArray(options.value) && options.value.length) return options.value[0][valueField.value]
    return ''
  },
  set: (val) => emits('update:value', val)
})
</script>

<style scoped lang="stylus">
.step_bar {
  text-align: center;
  width: calc(100%);
  .step {
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: v-bind('commonStyle.minorTextColor');
    background-color: v-bind('commonStyle.nextAreaColor');
    position: relative;
    font-size: 14px;
    border: 3px solid #F5F8FC;
    span, i{
      color: v-bind('commonStyle.optionTextColor');
      display: inline-block;
    }
    &:not(:first-child){
      border-left: 0px;
      margin-right: 2px;
    }
    &:not(:last-child){
      border-right: 0px;
      margin-right: 2px;
    }
  }
  .direction{
    bottom: 8.3px;
    right: -13px;
    position: absolute;
    z-index: 1;
    width: 23px;
    height: 20px;
    border-top: 4px solid #F5F8FC;
    border-right: 4px solid #F5F8FC;
    border-radius: 4px;
    border-left: 0px;
    border-bottom: 0px;
    background-color: v-bind('commonStyle.nextAreaColor');
    transform: rotate(60deg) skewX(30deg);
  }
  .current-step {
    background-color: v-bind('commonStyle.color');
  }
  .current-before-step {
    background-color: v-bind('commonStyle.hoverColor');
  }
  .step-success-mark{
    
  }
  span.step-mark{
    width: 24px;
    height: 24px;
    position: relative;
    text-align: center;
    border-radius: 50%;
    line-height: 24px;
    border: 2px solid #FFFFFF;
    span{
      position: relative;
      top: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FFFFFF;
    }
    i{
      width: 12px;
      height: 4.5px;
      border-left: 2.5px solid v-bind('commonStyle.hoverColor');
      border-bottom: 2.5px solid v-bind('commonStyle.hoverColor');
      border-radius: 2px;
      transform: rotate(-45deg);
      position: relative;
      top: -4.5px;
    }
  }
}
</style>