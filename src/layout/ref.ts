import { ref, reactive, h } from 'vue'

export const collapsed = ref(false)
export const activeKey = ref(null)

function renderIcon (icon: string) {
  return () => h('i', { class: icon })
}

export const menuOptions = reactive([
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon('iconfont gennlife_Right'),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    icon: renderIcon('iconfont gennlife_left'),
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
    icon: renderIcon('iconfont gennlife_Layer'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('iconfont gennlife_Show_File'),
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
])

export default {
  collapsed,
  activeKey,
  menuOptions
}
