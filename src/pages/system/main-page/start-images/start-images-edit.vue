<template>
  <div class="start-images-edit">
    <el-form :model="formData" label-position="right" label-width="150px">
      <el-form-item label="商品图片">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="src" :src="src" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="图片链接">
        <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" v-model="link" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <router-link :to="{path:'/system/main-page/start-images-list'}">
          <el-button type="primary">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'start-images-edit',
    data() {
      return {
        formData: {
          src: '',
          link: ''
        }
      }
    },
    methods: {
      onSubmit() {

      },
      handleAvatarSuccess(res, file) {
        this.formData.src = URL.createObjectURL(file.raw);
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
