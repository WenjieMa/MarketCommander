<template>
  <div class="sidebar">
    <el-menu :default-active="activeSide" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <span v-if="this.$store.state.menu.nav == 'item'">
        <el-menu-item index="list">商品信息管理</el-menu-item>
        <el-menu-item index="edit">商品添加</el-menu-item>
        <el-menu-item index="import">进货</el-menu-item>
        <el-menu-item index="itemtype">商品分类管理</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'communication'">
        <el-menu-item index="comment-reply">
          <el-badge :value="10" :max="99" class="item">评论管理</el-badge>
        </el-menu-item>
        <el-menu-item index="chat">
          <el-badge :value="10" :max="99" class="item">客户留言</el-badge>
        </el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'assistant'">
        <el-menu-item index="list">用户列表</el-menu-item>
        <el-menu-item index="add">新增用户</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'operator'">
        <el-menu-item index="list">管理员列表</el-menu-item>
        <el-menu-item index="add">新增管理员</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'main-page'">
        <el-menu-item index="hot-search">热词</el-menu-item>
        <el-menu-item index="start-columns">首页栏目</el-menu-item>
        <el-menu-item index="start-images">首页轮播</el-menu-item>
        <el-menu-item index="announcement-list">首页公告</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'order'">
        <el-menu-item index="list">订单发货</el-menu-item>
        <el-menu-item index="refund">退换货订单</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'systeminfo'">
        <el-menu-item index="district-list">省市信息</el-menu-item>
        <el-menu-item index="district-edit">省市录入</el-menu-item>
        <el-menu-item index="express-list">快递公司信息</el-menu-item>
        <el-menu-item index="express-edit">快递公司录入</el-menu-item>
      </span>
      <span v-if="this.$store.state.menu.nav == 'role'">
        <el-menu-item index="15">权限列表</el-menu-item>
        <el-menu-item index="16">权限赋予</el-menu-item>
      </span>
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
    },
    computed: {
      activeSide() {
        return this.$store.state.menu.side;
      }
    }
  }

</script>
