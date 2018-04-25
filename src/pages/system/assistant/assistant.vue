<template>
  <div class="assistant">
    我是assistant
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'assistant',
    data() {
      return {
        data: {}
      }
    }
  }

</script>
