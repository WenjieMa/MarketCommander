<template>
  <div class="sidebar">
    <el-menu :default-active="activeSide" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose">
      <span v-show="this.$store.state.menu.nav == 'home'">
        <el-menu-item index="system-homepage">总览</el-menu-item>
        <el-menu-item index="el-template">模块</el-menu-item>
      </span>
       <span v-show="this.$store.state.menu.nav == 'item'">
        <el-menu-item index="item-list">商品信息管理</el-menu-item>
        <el-menu-item index="item-import">进货管理</el-menu-item>
        <el-menu-item index="item-itemtype">商品分类管理</el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'communication'">
        <el-menu-item index="system-comment-list">
          评论管理
        </el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'assistant'">
        <el-menu-item index="user-list">用户列表</el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'operator'">
        <el-menu-item index="assistant-list">管理员列表</el-menu-item>
        <el-menu-item index="role-list">权限管理</el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'main-page'">
        <el-menu-item index="hot-search">热词</el-menu-item>
        <el-menu-item index="start-columns">首页栏目</el-menu-item>
        <el-menu-item index="start-images-list">首页轮播</el-menu-item>
        <el-menu-item index="announcement-list">首页公告</el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'order'">
        <el-menu-item index="order-list">订单列表</el-menu-item>
      </span>
      <span v-show="this.$store.state.menu.nav == 'systeminfo'">
        <el-menu-item index="district-list">省市信息</el-menu-item>
        <el-menu-item index="express-list">快递公司信息</el-menu-item>
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
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.$router.push({
          name: key
        });
      },
      handleOpen(key, keyPath) {},
      handleClose(key, keyPath) {}
    },
    computed: {
      activeSide() {
        // console.log('当前side:' + this.$store.state.menu.side);
        return this.$store.state.menu.side;
      }
    }
  }

</script>
