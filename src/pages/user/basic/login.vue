<template>
  <div class="login">
    <el-container>
      <el-container>
        <el-header>MC购物商城欢迎您！</el-header>
        <el-main>
          <el-form ref="form" :model="formValues" label-width="100px" size="mini">
            <el-form-item label="账号:">
              <el-input type="text" v-model="formValues.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="formValues.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin">登陆</el-button>
              <router-link type="success" :to="{ name: 'user-regist'}">
                <el-button type="success">注册</el-button>
              </router-link>
              <router-link type="success" :to="{ name: 'user-forget-psw'}">忘记密码</router-link>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
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
    },
    methods: {
      onLogin() {
        this.$router.push({
          path: '/user/home',
          param: {
            userid: 1
          }
        });
      }
    }
  }

</script>
