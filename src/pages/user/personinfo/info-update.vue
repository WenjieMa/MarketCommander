<template>
  <div class="user-edit">
    <el-form label-position="right" label-width="60px" size="medium" >
        <el-form-item label="头像">
          <el-upload class="userimage-uploader" :action="'http://localhost:8080/file/headpic?userid='+$store.state.user.info.id" :show-file-list="false" :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="userData.headpic" :src="userData.headpic" class="userimage">
            <i v-else class="el-icon-plus userimage-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="userData.gender" placeholder="性别">
            <el-option label="男" :value="true"></el-option>
            <el-option label="女" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userData.phone" placeholder="输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="userData.email" placeholder="输入email"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="userData.nickname" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userData.name" placeholder="输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import user from '@/services/user/user';
  export default {
    name: 'user-edit',
    data() {
      return {
        userData: this.$route.query.userData
      }
    },
    methods: {
      onSubmit() {
        user.update(this.userData).then(json => {
          console.log(json);
           this.$message({
            showClose: true,
            message: '修改成功！',
            type: 'success'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
      },
      handleAvatarSuccess(res, file) {
        console.log('返回的res' + JSON.stringify(res));
        this.userData.headpic = res.data.url;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }

</script>
