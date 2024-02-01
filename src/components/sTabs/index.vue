<template>
<div style="height: 40px;">
  <div
      v-if="options"
      class="tab-layer text-no"
      id="tab-layer">
    <span
      v-for="(item, index) in options"
      :key="index"
      :name="item[valueField]"
      :class="{
        'ml18': index,
        'tab-layer-level': true,
        'current-tab-layer': currentValue === item[valueField]
      }"
      @click="onDataLayer(item, $event, index)"
    >{{ item[labelField] }}</span>
    <span
      :class="{
        'current-tab-layer-background': true,
        'current-tab-layer-transition': transitionLeft
      }"
      :style="{
        left: `${currentDataLayer.left}px`,
        width: `${currentDataLayer.width}px`,
      }"
    ></span>
  </div>
</div>
</template>

<script setup lang="ts">
import {
  observeEl
} from '@stroll/web-tools'
import{
  styleVar
} from '.'

const commonStyle: any = useThemeVars()
Object.keys(styleVar).forEach((key: string) => {
  if (!commonStyle.value[key]) {
    commonStyle.value[key] = styleVar[key]
  }
})

const transitionLeft = ref(false)
const currentDataLayer = reactive({
  left: 0,
  width: 0,
  index: 1,
})

const props: any = defineProps({
  value: {
    type: String||Number,
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
const options: any = computed(() => props.options)
const valueField = computed(() => props.valueField)
const labelField = computed(() => props.labelField)
const currentValue = computed({
  get: () => {
    if (![null, undefined].includes(props.value)) return props.value
    if (Array.isArray(options.value) && options.value.length) return options.value[0][valueField.value]
    return ''
  },
  set: (val) => {
    return emits('update:value', val)
  }
})

if (Array.isArray(options.value) && options.value.length) {
  if(currentValue.value !== options.value[0][valueField.value]){
    options.value.forEach((item: any, index: number) => {
      if (currentValue.value === item[valueField.value]) {
        currentDataLayer.index = index+1
      }
    })
  }
}

const onDataLayer = (
  item: any,
  event: any,
  index: number
) => {
  const {
    offsetLeft,
    clientWidth
  } = event.target
  currentValue.value = item[valueField.value]
  currentDataLayer.left = offsetLeft
  currentDataLayer.width = clientWidth
  currentDataLayer.index = index+1
}

const initCurrentDataLayer = () => {
  const dataLayerEl = document.getElementById('tab-layer') as HTMLElement
  if (dataLayerEl && dataLayerEl.childNodes) {
    const {
      offsetLeft = 0,
      clientWidth = 0
    } = dataLayerEl.childNodes[currentDataLayer.index] as HTMLElement
    currentDataLayer.left = offsetLeft
    currentDataLayer.width = clientWidth
  }
  const dataLayerLevel = document.getElementsByClassName('tab-layer-level')
  
  Array.prototype.forEach.call(dataLayerLevel, (el: any) => {
    const name = el.getAttribute('name')
    const offsetLeft = el.offsetLeft
    const clientWidth = el.clientWidth
    options.value.forEach((item: any) => {
      if (item[valueField.value] === name) {
        item.left = offsetLeft
        item.width = clientWidth
      }
    })
  })
}
let elChange: any = null
nextTick(() => {
  initCurrentDataLayer()
  const dataLayerEl = document.getElementById('tab-layer') as HTMLElement
  elChange = dataLayerEl?observeEl.start(
    dataLayerEl,
    initCurrentDataLayer
  ):undefined
  setTimeout(() => {
    transitionLeft.value = true
  }, 1000)
})
onBeforeUnmount(() => {
  options.value = []
  if (elChange) {
    elChange.end()
    elChange = null
  }
})
</script>

<style scoped lang="stylus">
.tab-layer {
  height: 40px;
  text-align: center;
  position: relative;
  span{
    transition: width .5s;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
    top: 4px;
    &.current-tab-layer {
      color: v-bind('commonStyle.optionTextColor') !important;
    }
  }
  .current-tab-layer-background{
    background-color: v-bind('commonStyle.activeColor');
    position: absolute;
    z-index: 1;
  }
  .current-tab-layer-transition{
    transition: left 0.5s;
  }
  .tab-layer-level {
    transition: color 0.5s, transform 0.3s;
    padding: 0 32px;
    color: v-bind('commonStyle.defaultTextColor');
    position: relative;
    z-index: 2;
    font-size: 14px;
    cursor: pointer;
    &:hover{
      transform: scale(1.03);
      color: v-bind('commonStyle.activeColor')
    }
  }
}
</style>