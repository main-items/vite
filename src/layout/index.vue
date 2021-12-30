<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          v-model:value="activeKey"
        />
      </n-layout-sider>
      <n-layout>
        <slot name="header">
          <header />
        </slot> 
        <slot name="content">
          <div class="ml20 mr20">
            <content />
          </div>
        </slot> 
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup name="layout">
import { NMenu, NSpace, NLayout, NLayoutSider } from 'naive-ui'
import header from './header'
import content from './content'
import { collapsed, activeKey } from './ref'
const menuOptions = [
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
    },
    {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      disabled: true,
      children: [
        {
          label: '鼠',
          key: 'rat'
        }
      ]
    },
    {
      label: '寻羊冒险记',
      key: 'a-wild-sheep-chase',
      disabled: true,
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      children: [
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator',
            },
            {
              label: '羊男',
              key: 'sheep-man',
            }
          ]
        },
        {
          label: '饮品',
          key: 'beverage',
          children: [
            {
              label: '威士忌',
              key: 'whisky'
            }
          ]
        },
        {
          label: '食物',
          key: 'food',
          children: [
            {
              label: '三明治',
              key: 'sandwich'
            }
          ]
        },
        {
          label: '过去增多，未来减少',
          key: 'the-past-increases-the-future-recedes'
        }
      ]
    }
  ]
</script>