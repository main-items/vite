import { RouterLink } from 'vue-router'

export const infoBadge = ref(1)
export const userName = ref('user')
export const collapsed = ref(false)
export const systemLoading = ref(false)
export const messageShow = ref(false)
export const changePasswordShow = ref(false)
export const personalInfoShow = ref(false)
export const currentDropdown = ref('marina bay sands')

function renderIcon (icon: string) {
  return () => h('i', { class: icon })
}

/**
 * 菜单数据
 * @param {{}[]} params={}[] 参数集合
 * @explanation params 参数详解
 * @param {0|1} params.isMenu 是否菜单
 * @param {0|1} params.isShow 是否展示
 * @param {0|1} params.isExternal 是否外联
 * @param {string} params.name 名称
 * @param {string} params.icon 图标
 * @param {string} params.remark 描述
 * @param {string} params.path 跳转路径
 * @param {number} params.priority 优先级
 * @param {string|number} params.system 所属系统
 * @param {(add'|'delete'|'update'|'check')[]} params.operateList 操作权限
 * @param {any[]} params.backtrack 朔源 数据结构菜单相同
 * @param {any[]} params.children 子集 数据结构菜单相同
 */
export const menuList = ref<{
  isMenu: 0|1 // 是否菜单
  isShow: 0|1 // 是否展示
  isExternal: 0|1 // 是否外联
  name: string // 名称
  icon: string // 图标
  remark?: string // 描述
  path: string // 跳转路径
  priority: number // 优先级
  system: string|number // 所属系统
  backtrack?: any[] // 朔源
  children?: any[] // 子集
  operateList?: ('add'|'delete'|'update'|'check'|'to')[] // 操作权限
}[]>([
  {
    path: '/assetCatalog/manage',
    name: '用户管理',
    icon: 'main_project_icon-map',
    isMenu: 0,
    isShow: 1,
    isExternal: 0,
    priority: 1,
    system: 0
  }
])

export const menuOptions = reactive([
  {
    label: '资产目录',
    key: '/assetCatalog/directory',
    // disabled: true,
    query: {},
    icon: renderIcon('main_project_icon-map')
  },
  {
    label: '数据同步',
    key: '/dataSync/define',
    // disabled: true,
    query: {},
    icon: renderIcon('main_project_icon-map'),
    children: [
      {
        show: false,
        label: '新建同步任务',
        key: '/dataSync/syncTasks',
      },
      {
        show: false,
        label: '编辑同步任务',
        key: '/dataSync/syncTasks',
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    // disabled: true,
    show: false,
    icon: renderIcon('main_project_icon-map'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('main_project_icon-map'),
    show: false,
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

export const systemOptions = reactive([
  {
    label: '滨海湾金沙，新加坡',
    value: 'marina bay sands',
    disabled: false
  },
  {
    label: '布朗酒店，伦敦',
    value: "brown's hotel, london"
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    value: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    value: 'the beverly hills hotel, los angeles'
  }
])
export const userOptions = reactive([
  { label: '个人信息', value: 'personalInfo'},
  { label: '修改密码', value: 'changePassword'},
  { label: '退出登录', value: 'quit', path: '/login'},
])
export const breadcrumbOptions = reactive([
  {path: '/dataSync/define', label: '数据同步'},
  {path: '/dataSync/syncTasks', label: '任务'},
  {path: '/dataSync/finish', label: '完毕'},
])

