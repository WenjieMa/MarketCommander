<template>
  <div class="forget-psw">
    <el-container>
      <el-container>
        <el-header>找回密码</el-header>
        <el-main>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div v-if="process==1">
              <el-form-item label="账号:" prop="username">
                <el-input type="text" v-model="ruleForm.username" placeholder="请输入账号" auto-complete="off"></el-input>
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
              <el-form-item>
                <el-button type="primary" @click="onSureProcess1()">确认信息</el-button>
                <el-button type="success" @click="onBack()">返回</el-button>
              </el-form-item>
            </div>
            <div v-if="process==2">
              <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onForgetSubmit">确认修改</el-button>
                <el-button type="success" @click="onThisPageBack">返回</el-button>
              </el-form-item>
            </div>
          </el-form>
        </el-main>
      </el-container>
    </el-container>
    <alert v-if="isForgetUpdatePsw" :title="toTitle" :toRoute="toRoute"></alert>
  </div>
</template>
<script>
  import qcloudsms from '@/utils/qcloudsms.js';
  export default {
    name: 'forget-psw',
    components: {
      alert
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入密码'));
        } else if (value.length > 25 || value.length < 6) {
          callback(new Error('请确保密码长度为6-25位!'));
        } else {
          if (this.ruleForm.checkPass != '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.ruleForm.pass) {
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
          callback(new Error('验证码不正确!'));
        } else {
          callback();
        }
      }
      return {
        isForgetUpdatePsw: false,
        process: 1,
        isSended: false,
        isPhoneCorrect: false,
        sending: false,
        phoneCheckNum: '',
        toTitle: '',
        toRoute: '',
        ruleForm: {
          username: '',
          pass: '',
          checkPass: '',
          age: '',
          phone: '',
          name: '',
          email: '',
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
      onForgetSubmit() {
        var isSuccess = false;
        isSuccess = true;
        if (isSuccess) {
          this.toTitle = '修改成功！';
          this.toRoute = '/login';
          this.isForgetUpdatePsw = true;
        } else {
          this.toTitle = '修改发生错误，请重新尝试！';
          this.toRoute = '';
          this.isForgetUpdatePsw = true;
        }
      },
      onBack() {
        this.$router.go(-1);
      },
      onSureProcess1() {
        var sure = false;
        sure = true;
        if (sure) {
          this.process = 2;
        }
      },
      onThisPageBack() {
        this.process = 1;
      },
      onSendMsg() {
        this.sending = true;
        this.phoneCheckNum = qcloudsms.send(this.ruleForm.phone, this.callbackFunc);
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
        if (!phoneRegex.test(this.ruleForm.phone || !this.judgeUserAndPhone())) {
          this.isPhoneCorrect = false;
        } else {
          this.isPhoneCorrect = true;
        }
      },
      judgeUserAndPhone() {
        return true;
      }
    }
  }

</script>
