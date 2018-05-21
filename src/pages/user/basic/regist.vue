<template>
  <div class="regist">
    <el-container>
      <el-container>
        <el-header>注册你的MC账号</el-header>
        <el-main>
          <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="60px" class="not-inline-form">
            <el-form-item label="账号" prop="username">
              <el-input type="text" v-model="formData.username" placeholder="请输入账号" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="formData.pass" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="formData.checkPass" placeholder="请再次输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model.number="formData.phone" @blur="judgePhone()" placeholder="请输入手机号" auto-complete="off"></el-input>
              <el-button type="primary" :loading="true" round plain disabled v-if="sending&&!isSended">正在发送验证码</el-button>
              <el-button type="primary" :loading="false" disabled round plain v-if="!isPhoneCorrect">发送验证码</el-button>
              <el-button type="primary" @click="onSendMsg()" :loading="false" round plain v-if="!sending&&isPhoneCorrect&&!isSended">发送验证码</el-button>
              <el-button type="primary" @click="onSendMsg()" :loading="false" round plain v-if="!sending&&isPhoneCorrect&&isSended">再次发送验证码</el-button>
            </el-form-item>
            <el-form-item label="验证码" prop="phoneCheckIputNum" v-if="isSended">
              <el-input v-model.number="formData.phoneCheckIputNum" placeholder="在此输入验证码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="formData.nickname" placeholder="请输入昵称" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label-width="0px;">
              <el-button type="primary" @click="onRegistSubmit()">确认注册</el-button>
              <router-link type="success" :to="{ name: 'user-login'}">
                <el-button type="success">返回</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import qcloudsms from '@/utils/qcloudsms.js';
  import basic from '@/services/basic'
  export default {
    name: 'regist',
    data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // }
      var validatePass = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入密码'));
        } else if (value.length > 25 || value.length < 6) {
          callback(new Error('请确保密码长度为6-25位!'));
        } else {
          if (this.formData.checkPass != '') {
            this.$refs.formData.validateField('checkPass');
          }
          callback();
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.formData.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      var validateUsername = (rule, value, callback) => {
        const userRegex = /^[a-z0-9_]+$/i;
        if (value == '') {
          callback(new Error('请输入用户名'));
        } else if (!userRegex.test(value)) {
          callback(new Error('请确保用户名由下划线，数字和字母组成!'));
        } else if (value.length > 16 || value.length < 6) {
          callback(new Error('请确保用户名长度为6-16位!'));
        } else {
          callback();
        }
      }
      var validatePhone = (rule, value, callback) => {
        const phoneRegex = /^1[0-9]{10}$/i;
        if (value == '') {
          callback(new Error('请输入手机号'));
        } else if (!phoneRegex.test(value)) {
          callback(new Error('请确保手机号格式正确!'));
        } else {
          callback();
        }
      }
      // var validateEmail = (rule, value, callback) => {
      //   const emalRegex = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/i;
      //   if (value == '') {
      //     callback(new Error('请输入邮箱'));
      //   } else if (!emalRegex.test(value)) {
      //     callback(new Error('请确保邮箱格式正确!'));
      //   } else {
      //     callback();
      //   }
      // }
      var validatePhoneCheckIputNum = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入验证码！'));
        } else if (value != this.phoneCheckNum) {
          console.log(value + '/' + this.phoneCheckNum);
          callback(new Error('验证码不正确!'));
        } else {
          callback();
        }
      }
      return {
        isSended: false,
        isPhoneCorrect: false,
        sending: false,
        phoneCheckNum: '',
        formData: {
          username: '123456',
          pass: '123456',
          checkPass: '123456',
          phone: '15273202288',
          nickname: '小马哥',
          phoneCheckIputNum: ''
        },
        rules: {
          phoneCheckIputNum: [{
            validator: validatePhoneCheckIputNum,
            trigger: 'blur'
          }],
          phone: [{
            validator: validatePhone,
            trigger: 'blur'
          }],
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      onRegistSubmit() {
        if (this.judgePhoneCheck()) {
          this.$loading = true;
          const params = {
            username: this.formData.username,
            password: this.formData.pass,
            phone: this.formData.phone,
            nickname: this.formData.nickname
          }
          basic.userRegist(params).then(json => {
            this.$loading = false;
            this.$message({
              showClose: true,
              message: '注册成功！',
              type: 'success'
            });
            this.$router.push({
              name: 'user-login'
            });
          }).catch(err => {
            console.log(err);
            this.$message({
              showClose: true,
              message: '注册信息错误！',
              type: 'error'
            });
            this.$loading = false;
          })
        } else {
          this.$message({
            showClose: true,
            message: '验证码错误',
            type: 'error'
          });
        }
      },
      onBack() {
        this.$router.go(-1);
      },
      onSendMsg() {
        this.sending = true;
        this.phoneCheckNum = qcloudsms.send(this.formData.phone, this.callbackFunc);
        console.log(this.phoneCheckNum);
        if (this.phoneCheckNum != '') {
          this.isSended = true;
        } else {
          this.isSended = false;
        }
      },
      callbackFunc(err, res, resData) {
        if (err) {
          this.$notify.error({
            title: '出错',
            message: '消息服务器发送出错！请稍后再试!'
          });
        } else if (resData.result == 0) {
          this.$notify({
            title: '成功',
            message: '验证码已经发送到您的手机！',
            type: 'success'
          });
        } else {
          this.$notify({
            title: '异常',
            message: resData.text,
            type: 'warning'
          });
        }
      },
      judgePhone() {
        const phoneRegex = /^1[0-9]{10}$/i;
        if (!phoneRegex.test(this.formData.phone)) {
          this.isPhoneCorrect = false;
        } else {
          this.isPhoneCorrect = true;
        }
      },
      judgePhoneCheck() {
        if (this.phoneCheckNum != '' && this.phoneCheckNum != this.formData.phoneCheckIputNum) {
          return false;
        }
        return true;
      }
    }
  }

</script>
