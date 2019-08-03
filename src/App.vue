<template>
  <div class="app-warpper">
    <router-view/>
    <van-tabbar route v-model="active">
      <van-tabbar-item
        replace
        to="/"
      >
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.home_active : icon.home_normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/game"
      >
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.ball_acitve : icon.ball_normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/forum"
      >
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.forum_active : icon.forum_normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
import {icon} from './constant/image'
export default {
  name: 'app',
  data() {
    return {
      active: 0,
      icon
    }
  }
}
</script>

<style>
html{
  background: #fafafa;
}
.app-warpper{
  overflow: scroll;
}
</style>
