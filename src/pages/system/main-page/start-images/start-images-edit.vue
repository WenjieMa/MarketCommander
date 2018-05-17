<template>
  <div class="start-images-edit">
    <el-form :model="formData" label-position="right" label-width="150px">
      <el-form-item label="商品图片">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="formData.src" :src="formData.src" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="图片链接">
        <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" v-model="formData.link" placeholder="图片链接"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertData">确认</el-button>
        <router-link :to="{path:'/system/main-page/start-images-list'}">
          <el-button type="primary">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import image from '@/services/system/main-page/image'
  export default {
    name: 'start-images-edit',
    data() {
      return {
        formData: {
          src: this.$route.query.imageData.src || '',
          link: this.$route.query.imageData.link || ''
        }
      }
    },
    methods: {
      insertData() {
        const params = this.formData
        image.insert(params).then(json => {
          console.log(json);
          this.$message({
            showClose: true,
            message: '添加成功！',
            type: 'success'
          });
          this.$loading = false;
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
    },
    created() {
      console.log(JSON.stringify(this.$route.query.imageData) + '｝｝');
    }
  }

</script>
