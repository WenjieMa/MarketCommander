<template>
  <div class="sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <span>
        <el-menu-item index="1">商品信息管理</el-menu-item>
        <el-menu-item index="2">商品添加</el-menu-item>
        <el-menu-item index="3">进货</el-menu-item>
      </span>
      <el-menu-item index="4">
        <el-badge :value="10" :max="99" class="item">评论管理</el-badge>
      </el-menu-item>
      <el-menu-item index="5">
        <el-badge :value="10" :max="99" class="item">客户留言</el-badge>
      </el-menu-item>

      <el-menu-item index="6">用户列表</el-menu-item>
      <el-menu-item index="7">新增用户</el-menu-item>

      <el-menu-item index="8">管理员列表</el-menu-item>
      <el-menu-item index="9">新增管理员</el-menu-item>

      <el-menu-item index="10">首页栏目</el-menu-item>
      <el-menu-item index="11">热词</el-menu-item>
      <el-menu-item index="12">首页轮播</el-menu-item>

      <el-menu-item index="13">省市信息列表</el-menu-item>
      <el-menu-item index="14">省市信息录入</el-menu-item>

    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'sidebar',
    data() {
      return {};
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
