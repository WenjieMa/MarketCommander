<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="navbar-brand">MarketCommander</div>
      <el-menu-item index="1">
        <router-link :to="{name: 'el-template'}">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <template slot="title"> <i class="el-icon-goods"></i>yarn商品中心</template>
      </el-menu-item>
      <el-menu-item index="3">
        <template slot="title">订单中心</template>
      </el-menu-item>
      <el-menu-item index="4">
        <template slot="title">沟通中心</template>
      </el-menu-item>
      <el-menu-item index="5">
        <template slot="title">用户信息中心</template>
      </el-menu-item>
      <el-menu-item index="6">
        <template slot="title">营销中心</template>
      </el-menu-item>
      <el-menu-item index="7">
        <template slot="title">系统数据中心</template>
      </el-menu-item>
      <el-menu-item index="8">
        <template slot="title">超级管理员</template>
      </el-menu-item>
      <div class="navbar-userctl"></div>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
