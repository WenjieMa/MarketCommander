<template>
  <div class="user-home">
    <div class="user-home-above">
      <transition name="fade" mode="out-in">
          <div class="user-box-card">
            <router-view></router-view>
          </div>
      </transition>
      <div class="loading-mask" v-if="utils.loading.active"></div>
      <div class="loading" v-if="utils.loading.active">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path">
          </circle>
        </svg>
        <p class="loading-text">拼命加载中</p>
      </div>
    </div>
    <user-navbar></user-navbar>
  </div>
</template>
<script>
  export default {
    name: 'user-home',
    data() {
      return {

      };
    }
  };

</script>
