<template>
  <MainPage :collapsed="collapsed">
    <template v-slot:header >
      <div class="header">
        <div class="header-operate" style="height: 66px;">
          <System
            class="lf"
            v-model:value="currentDropdown"
            :options="systemOptions"
            @select="onSystemFn"
          />
          <div class="header-operate-mask rf" style="height: 66px;">
            <User
                :options="userOptions"
                :color="commonStyle.areaColor"
                :userName="userName"
                @select="onUserFn">
              <NBadge
                  :value="infoBadge"
                  class="pl12 pr12"
                  :offset="[-15, 26]"
                  color="#F9AC13"
                  dot>
                <NButton
                    text
                    size="tiny"
                    type="info"
                    :color="commonStyle.areaColor"
                    class="shake"
                    style="padding: 26px 0px;"
                    @click="onUserFn('message')">
                  <template #icon>
                      <i class="main_project_icon-notice" />
                      <div class="ripple-l-r"></div>
                      <div class="ripple-b"></div>
                  </template>
                </NButton>
              </NBadge>
            </User>
          </div>
          <div class="cb"></div>
        </div>
        <Breadcrumb
          :options="breadcrumbOptions"
          value-field="path"
          @select="onBreadcrumbFn"
        />
      </div>
    </template>
    <template v-slot:menu >
      <Menu
        v-model:value="activeKey"
        v-model:collapsed="collapsed"
        :options="menuOptions"
        logoIconClass="main_project_icon-logo_mark"
        @portal="toPortal"
        @update:value="onUpdateValue"
      />
    </template>
    <template v-slot:content>
      <Content />
    </template>
  </MainPage>
  <SMessage v-model:show="messageShow" />
  <SChangePassword v-model:show="changePasswordShow" />
  <SPersonalInfo v-model:show="personalInfoShow" />
</template>
<script lang="ts" setup>
import {activeKey} from '@store'
import MainPage from '@mainPage'
import SMessage from './0_shutter/message/index.vue'
import SChangePassword from './0_shutter/changePassword/index.vue'
import SPersonalInfo from './0_shutter/personalInfo/index.vue'
import System from './1_header/system.vue'
import User from './1_header/user.vue'
import Breadcrumb from './1_header/breadcrumb.vue'
import Menu from './2_menu/index.vue'
import Content from './3_content/index.vue'
import events from './event'
import {
  messageShow,
  changePasswordShow,
  personalInfoShow,
  collapsed,
  menuOptions,
  infoBadge,
  currentDropdown,
  userName,
  systemOptions,
  userOptions,
  breadcrumbOptions
} from '.'
const router = useRouter()
const route = useRoute()

const commonStyle: any = useThemeVars()

const toPortal = () => {
  router.push('/portal')
}

const onUpdateValue = (path: string, item: any) => {
  const {query} = item||{}
  router.push({path, query})
}

const onSystemFn = (value: any, option: any) => {
  console.log('切换平台', value, option)
}
const onUserFn = (value: any, option: any = {}) => {
  events[value]&&events[value]()
  option.path&&router.push(option.path)
}
const onBreadcrumbFn = (path: any, option: any) => {
  const query = option.query||{}
  path&&router.push({
    path,
    query
  })
}
</script>

<style lang="stylus" scoped>
.header{
  background-color: v-bind('commonStyle.selectedColor');
  .header-operate{
    position: relative;
    overflow: hidden;
  }
}
.header-operate-mask{
  height: calc(100%);
  background: radial-gradient(
    100% 127% at 96% 26%,
    #7AD927 -52%,
    #0678ff 100%
  );
}
.shake{
  position: relative;
  .main_project_icon-notice{
    transform-origin: center top;
    animation-duration: 1.2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    display: inline-block;
    position: relative;
    font-size: 24px;
  }
  [class^=ripple] {
    opacity: 0;
    position: absolute;
    display: inline-block;
    height: 12px;
    animation-delay: .3s;
    animation-duration: .7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }
  &:hover{
    .ripple-l-r {
      animation-name: wave;
      border-radius: 8px;
      bottom: -5px;
      width: calc(100% + 6px);
      left: -4px;
      border-left: 2px solid #F9AC13;
      border-right: 2px solid #F9AC13;
    }
    .ripple-b {
      animation-name: wave;
      border-radius: 50%;
      bottom: -9px;
      width: 8px;
      left: 3px;
      border-bottom: 2px solid #F9AC13;
    }
    .main_project_icon-notice{
      animation-name: upAnimation;
      transform: v-bind('commonStyle.textHoverSize');
    }
  }
}

/* 根据需求自定义 */
@keyframes wave {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(1.5);
  }
}
@keyframes upAnimation {
  0% {
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }

  4% {
    transform: rotate(-12deg);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }

  20% {
    transform: rotate(10deg);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }

  36% {
    transform: rotate(-8deg);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }

  52% {
    transform: rotate(6deg);
    transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
  }

  68% {
    transform: rotate(-4deg);
    transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
  }

  84% {
    transform: rotate(2deg);
    transition-timing-function: cubic-bezier(0.755, .5, .855, .06)
  }

  100% {
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
}
</style>
