<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="navbar-brand">MarketCommander</div>
      <el-menu-item index="1"><router-link :to="{name: 'el-template'}">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">商品管理</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-submenu index="2-2">
          <template slot="title">选项2</template>
          <el-menu-item index="2-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">商品管理</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-submenu index="3-2">
          <template slot="title">选项2</template>
          <el-menu-item index="3-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">商品管理</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">选项2</template>
          <el-menu-item index="4-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">商品管理</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-submenu index="5-2">
          <template slot="title">选项2</template>
          <el-menu-item index="5-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="6" disabled>消息中心</el-menu-item>
      <div class="navbar-userctl"></div>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
