export const userName = ref('--')
export const userOptions = reactive([
  { label: '个人信息', value: 'personalInfo',
    fn(){
      
    }
  },
  { label: '修改密码', value: 'changePassword',
    fn(){
      
    }
  },
  { label: '退出登录', value: 'quit', path: '/login',
    fn(){
      sessionStorage.clear()
      localStorage.clear()
    }
  },
])