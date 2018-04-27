<template>
  <div class="item">
     我是item
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'item',
  data () {
    return {
      data: {
      }
    }
  }
}
</script>
