<template>
  <div class="leadbar">
    <el-card class="font12" style="margin-bottom:25px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="route in routeList" :to="route.path" :key="route.index">{{route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'leadbar',
    data() {
      return {
        data: {
        }
      }
    },
    computed: {
      routeList() {
        return this.$store.state.routeList;
      }
    }
  }

</script>
