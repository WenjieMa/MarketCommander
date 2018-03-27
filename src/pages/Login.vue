<template>
  <div class="login">
    <el-form ref="form" :model="formValues" label-width="100px" size="mini">
      <el-form-item label="账号:">
        <el-input type="text" v-model="formValues.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" v-model="formValues.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      formValues: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<!--<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
-->
