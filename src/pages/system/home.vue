<template>
  <div class="home">
    <navbar></navbar>
    <sidebar></sidebar>
    <transition name="fade" mode="out-in">
      <div class="main-contain">
        <leadbar></leadbar>
        <el-card class="box-card">
          <router-view></router-view>
        </el-card>
      </div>
    </transition>
    <div class="loading-mask" v-if="this.$store.state.loading.active"></div>
    <div class="loading" v-if="this.$store.state.loading.active">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path">
        </circle>
      </svg>
      <p class="loading-text">拼命加载中</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {

      };
    }
  };

</script>
