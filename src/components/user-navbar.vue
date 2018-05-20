<template>
  <div class="user-navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width:100%">
      <el-menu-item index="/user/homepage" style="width:33.33%;">
        <template slot="title">
          <i class="el-icon-mobile-phone"></i> 商城</template>
      </el-menu-item>
      <el-menu-item index="/user/shopcart/cart" style="width:33.33%;">
        <template slot="title">
          <i class="el-icon-goods"></i>购物车{{cartCount==0?'':'('+cartCount+')'}}
        </template>
      </el-menu-item>
      <el-menu-item index="/user/personinfo/info" style="width:33.33%;">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          个人信息
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'user-navbar',
    data() {
      return {}
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$store.state.activeIndex = key;
        this.$router.push({
          path: key
        });
      }
    },
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      },
      cartCount() {
        return this.$store.state.user.shopcart.count;
      }
    }
  }

</script>
