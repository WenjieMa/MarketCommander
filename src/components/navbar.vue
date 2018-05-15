<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="navbar-brand">MarketCommander</div>
      <el-menu-item index="/system/homepage">
        <template slot="title"> 首页</template>
      </el-menu-item>
      <el-menu-item index="/system/item/list">
        <template slot="title">
          <i class="el-icon-goods"></i>商品中心
        </template>
      </el-menu-item>
      <el-menu-item index="/system/order/list">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          订单中心
        </template>
      </el-menu-item>
      <el-menu-item index="/system/communication/chat-list">
        <template slot="title">
          <i class="el-icon-message"></i>沟通中心</template>
      </el-menu-item>
      <el-menu-item index="/system/assistant/list">
        <template slot="title">用户信息中心</template>
      </el-menu-item>
      <el-menu-item index="/system/main-page/hot-search">
        <template slot="title">营销中心</template>
      </el-menu-item>
      <el-menu-item index="/system/systeminfo/district/district-list">
        <template slot="title">系统数据中心</template>
      </el-menu-item>
      <el-menu-item index="/system/operator/assistant-list">
        <template slot="title">超级管理员</template>
      </el-menu-item>
      <div class="navbar-userctl">
        {{"欢迎," + this.$store.state.user.info.name}}
        <div class="navbar-dropdown">
          <router-link :to="{path: '/system/info-update'}">
            个人设置
          </router-link>
          <a @click="signout">注销</a>
        </div>
      </div>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {}
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$store.state.activeIndex = key;
        this.$router.push({
          path: key
        });
      },
      signout() {
        const logoutinfo = {
          correct: false,
          info: {
            userid: '',
            name: ''
          },
          roleTree: {

          }
        }
        this.$store.state.user = logoutinfo;
        this.$router.push({
          path: '/system/login'
        });
      }
    },
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    }
  }

</script>
