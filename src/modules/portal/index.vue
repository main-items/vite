<template>
<div class="portal-box">
  <User
    :options="userOptions"
    :userName="userName"
    class="user-operate"
    color="#3F5779"
  />
  <div class="portal">
    <div class="title">{{config.systemTitle}}<div class="mask"></div></div>
    <NScrollbar style="height: calc(100% - 148px);">
      <div class="system-box">
        <div class="system">
          <img src="@img/factory.png" alt="">
          <strong class="mb24">
            数据服务<span>（待建）</span>
          </strong>
          <NEllipsis
              class="system-description ml32 mr32"
              :line-clamp="3"
              :tooltip="{
                to: '.mainRenderBox',
                delay: 500,
                placement: 'top-end',
                contentStyle: {
                  width: '360px'
                }
              }">
            电灯熄灭 物换星移 泥牛入海黑暗好像 一颗巨石 按在胸口
            黑暗好像 一颗巨石 按在胸口
            独脚大盗 百万富翁 摸爬滚打
            黑暗好像 一颗巨石 按在胸口电灯熄灭 物换星移 
          </NEllipsis>
        </div>
        <div class="system">
          <img src="@img/factory.png" alt="">
          <strong class="mb24">
            数据服务<span>（待建）</span>
          </strong>
          <NEllipsis
              class="system-description ml32 mr32"
              :line-clamp="3"
              :tooltip="{
                to: '.mainRenderBox',
                delay: 500,
                placement: 'top-end',
                contentStyle: {
                  width: '360px'
                }
              }">
            电灯熄灭 物换星移 泥牛入海黑暗好像 一颗巨石 按在胸口
            黑暗好像 一颗巨石 按在胸口
            独脚大盗 百万富翁 摸爬滚打
            黑暗好像 一颗巨石 按在胸口电灯熄灭 物换星移 
          </NEllipsis>
        </div>
        <div class="system">
          <img src="@img/factory.png" alt="">
          <strong class="mb24">
            数据服务<span>（待建）</span>
          </strong>
          <NEllipsis
              class="system-description ml32 mr32"
              :line-clamp="3"
              :tooltip="{
                to: '.mainRenderBox',
                delay: 500,
                placement: 'top-end',
                contentStyle: {
                  width: '360px'
                }
              }">
            电灯熄灭 物换星移 泥牛入海黑暗好像 一颗巨石 按在胸口
            黑暗好像 一颗巨石 按在胸口
            独脚大盗 百万富翁 摸爬滚打
            黑暗好像 一颗巨石 按在胸口电灯熄灭 物换星移 
          </NEllipsis>
        </div>
        <div class="system">
          <img src="@img/factory.png" alt="">
          <strong class="mb24">
            数据服务<span>（待建）</span>
          </strong>
          <NEllipsis
              class="system-description ml32 mr32"
              :line-clamp="3"
              :tooltip="{
                to: '.mainRenderBox',
                delay: 500,
                placement: 'top-end',
                contentStyle: {
                  width: '360px'
                }
              }">
            电灯熄灭 物换星移 泥牛入海黑暗好像 一颗巨石 按在胸口
            黑暗好像 一颗巨石 按在胸口
            独脚大盗 百万富翁 摸爬滚打
            黑暗好像 一颗巨石 按在胸口电灯熄灭 物换星移 
          </NEllipsis>
        </div>
        <div class="cb"></div>
      </div>
    </NScrollbar>
  </div>
  <div class="portal-footer pb24 pt24">
    <div class="mask"></div>
    Copyright © 2016-2023 **科技有限公司 京ICP备15312310号-1
  </div>
</div>
</template>

<script setup lang="ts">
import User from '@modules/home/1_header/user.vue'
import config from '@config'
import {
  userOptions,
  userName
} from '.'
</script>

<style scoped lang="stylus">
.portal-header,
.portal-box,
.portal-footer{
  background-color: #FFFFFF;
  position: relative;
}
.portal-box{
  height: calc(100%);
  .user-operate{
    position: absolute;
    right: 20px;
    top: 0;
  }
  .mask{
    position: absolute;
    height: 20px;
    width: calc(100% - 12px);
  }
}
.portal-header{
  text-align: right;
  height: 32px;
}
.portal-footer{
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  .mask{
    top: -20px;
    background: linear-gradient(
      to top,
      rgba(255,255,255, 1),
      rgba(255,255,255, 0)
    );
  }
}
.portal{
  height: calc(100% - 132px);
  padding-top: 60px;
  .title{
    position: relative;
    color: #0F2034;
    text-align: center;
    font-size: 46px;
    height: 60px;
    line-height: 60px;
    padding 44px 0;
    .mask{
      z-index: 1;
      bottom: -20px;
      background: linear-gradient(
        to bottom,
        rgba(255,255,255, 1),
        rgba(255,255,255, 0)
      );
    }
  }
  .system-box{
    text-align: center;
    padding: 94px;
  }
  .system{
    width: 364px;
    height: 444px;
    border-radius: 8px;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(233, 240, 253, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%),
      #FFFFFF;
    box-sizing: border-box;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 6px 20px 0px rgba(230, 233, 252, 0.8);
    cursor: pointer;
    display: inline-block;
    margin-bottom: 80px;
    transition: all .6s;
    &:not(:last-child){
      margin-right: 80px;
    }
    &:last-child{
      margin-right: 0px;
    }
    &:hover{
      transform: scale(1.2);
      box-shadow: 0px 12px 40px 0px rgba(104, 132, 242, 0.4);
    }
    img{
      width: 160px;
      margin: 40px 102px 50px 102px;
    }
    strong{
      display: block;
      text-align: center;
      font-size: 30px;
      height: 42px;
      line-height: 42px;
      color: #0F2034;
      span{
        font-size: 15px;
        color: #0F2034;
      }
    }
    .system-description{
      color: #3F5779;
      line-height: 32px;
    }
  }
}
</style>
