<template>
  <div class="login">
    <el-container>
      <el-container>
        <el-header>欢迎使用MarketCommander购物管理系统</el-header>
        <el-main>
          <el-form ref="form" :model="formValues" label-width="100px" size="mini" class="not-inline-form">
            <el-form-item label="账号:">
              <el-input type="text" v-model="formValues.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="formValues.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin">登陆</el-button>
              <router-link type="success" :to="{ name: 'system-regist'}">
                <el-button type="success">注册</el-button>
              </router-link>
              <router-link type="success" :to="{ name: 'system-forget-psw'}">忘记密码</router-link>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer>作者：Marven
          <br>e-mail：754825416@qq.com</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import basic from '@/services/basic'
  export default {
    name: 'login',
    data() {
      return {
        formValues: {
          username: '123456',
          password: '123456'
        }
      }
    },
    methods: {
      onLogin() {
        this.$loading = true;
        const params = {
          username: this.formValues.username,
          password: this.formValues.password
        }
        basic.login(params).then(json => {
          this.$loading = false;
          this.$store.state.operator = {
            correct: true,
            info: {
              operid: json.data.infoOperator.id,
              name: json.data.infoOperator.name
            }
          }
          var rolestr = '';
          json.data.infoRoles.forEach(element => {
            rolestr = rolestr + '-' + element.rolecode;
          });
          rolestr = rolestr.substring(1);
          this.$store.state.roletree = rolestr;
          console.log('当前role为' + this.$store.state.roletree);
          this.$router.push({
            name: 'system-homepage'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '用户名不存在或者密码错误！',
            type: 'error'
          });
          this.$loading = false;
        })
      }
    }
  }

</script>
