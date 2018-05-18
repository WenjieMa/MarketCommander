<template>
  <div class="user-detail">
    <el-form :model="userData" label-position="right" label-suffix="" label-width="150px">
      <el-col :span="12">
        <el-form-item label="用户头像">
          <img :src="userData.headpic" />
        </el-form-item>
        <el-form-item label="用户id">
          {{userData.id}}
        </el-form-item>
        <el-form-item label="用户账号">
          {{userData.username}}
        </el-form-item>
        <el-form-item label="用户性别">
          {{userData.gender}}
        </el-form-item>
        <el-form-item label="手机号">
          {{userData.phone}}
        </el-form-item>
        <el-form-item label="email">
          {{userData.email}}
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="昵称">
          {{userData.nickname}}
        </el-form-item>
        <el-form-item label="真实姓名">
          {{userData.name}}
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'user-detail',
    data() {
      return {
        userid: this.$route.query.id || -1,
        userData: this.$route.query.userData
      }
    },
    methods: {
    }

  }

</script>
