<template>
  <div class="regist">
    <el-container>
      <el-container>
        <el-header>注册你的管理员账号</el-header>
        <el-main>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="not-inline-form">
            <el-form-item label="账号:" prop="username">
              <el-input type="text" v-model="ruleForm.username" placeholder="请输入账号" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword">
              <el-input type="password" v-model="ruleForm.checkpassword" placeholder="请再次输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-select v-model="ruleForm.gender" placeholder="请选择">
                <el-option :label="'男'" :value="'1'">
                </el-option>
                <el-option :label="'女'" :value="'0'">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model.number="ruleForm.phone" @blur="judgePhone()" placeholder="请输入手机号" auto-complete="off"></el-input>
              <el-button type="primary" :loading="true" round plain disabled v-if="sending&&!isSended">正在发送验证码</el-button>
              <el-button type="primary" :loading="false" disabled round plain v-if="!isPhoneCorrect">发送验证码</el-button>
              <el-button type="primary" @click="onSendMsg()" :loading="false" round plain v-if="!sending&&isPhoneCorrect&&!isSended">发送验证码</el-button>
              <el-button type="primary" @click="onSendMsg()" :loading="false" round plain v-if="!sending&&isPhoneCorrect&&isSended">再次发送验证码</el-button>
            </el-form-item>
            <el-form-item label="验证码" prop="phoneCheckIputNum" v-if="isSended">
              <el-input v-model.number="ruleForm.phoneCheckIputNum" placeholder="在此输入验证码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入姓名" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onRegistSubmit()">确认注册</el-button>
              <router-link type="success" :to="{ name: 'system-login'}">
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
  // import qcloudsms from '@/utils/qcloudsms.js';
  import basic from '../../../services/basic'
  export default {
    name: 'regist',
    data() {
      var validatepassword = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入密码'));
        } else if (value.length > 25 || value.length < 6) {
          callback(new Error('请确保密码长度为6-25位!'));
        } else {
          if (this.ruleForm.checkpassword != '') {
            this.$refs.ruleForm.validateField('checkpassword');
          }
          callback();
        }
      }
      var validatepassword2 = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.ruleForm.password) {
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
        ruleForm: {
          username: '123456',
          password: '123456',
          checkpassword: '123456',
          gender: '1',
          phone: '15273202288',
          name: '123456',
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
          password: [{
            validator: validatepassword,
            trigger: 'blur'
          }],
          checkpassword: [{
            validator: validatepassword2,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      onBack() {
        this.$router.go(-1);
      },
      onSendMsg() {
        this.sending = true;
        // this.phoneCheckNum = qcloudsms.send(this.ruleForm.phone, this.callbackFunc);
        // console.log(this.phoneCheckNum);
        // if (this.phoneCheckNum != '') {
        //   this.isSended = true;
        // } else {
        //   this.isSended = false;
        // }
        this.isSended = true;
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
        if (!phoneRegex.test(this.ruleForm.phone)) {
          this.isPhoneCorrect = false;
        } else {
          this.isPhoneCorrect = true;
        }
      },
      judgePhoneCheck() {
        if (this.phoneCheckNum != this.ruleForm.phoneCheckIputNum) {

        }
      },
      onRegistSubmit() {
        this.$loading = true;
        const params = {
          id: '',
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          gender: this.ruleForm.gender,
          phone: this.ruleForm.phone,
          name: this.ruleForm.name
        }
        basic.regist(params).then(json => {
          this.$loading = false;
          this.$router.push({
            path: '/system/homepage',
            param: {
              userid: 1
            }
          });
        }).catch(err => {
          err = '';
          this.$message({
            showClose: true,
            message: '信息填写错误',
            type: 'error'
          });
          this.$loading = false;
        })
      }
    }
  }

</script>
