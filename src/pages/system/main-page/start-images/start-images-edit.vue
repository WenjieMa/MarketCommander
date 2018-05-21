<template>
  <div class="start-images-edit">
    <el-form :model="formData" label-position="right" label-width="150px">
      <el-form-item label="轮播展示图片">
        <el-upload class="avatar-uploader" :action="'http://localhost:8080/file/homepic?picid='+formData.id" :show-file-list="false"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="formData.src" :src="formData.src" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="对应商品Id">
        <el-input v-model="formData.link" placeholder="对应商品Id"></el-input>
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
          id: this.$route.query.imageData.id || -1,
          src: this.$route.query.imageData.src || '',
          link: this.$route.query.imageData.link || ''
        }
      }
    },
    methods: {
      insertData() {
        const params = {};
        if (this.formData.id > 0) {
          params.id = this.formData.id;
        }
        params.src = this.formData.src;
        console.log('图片src' + this.formData.src);
        params.link = this.formData.link;
        image.insert(params).then(json => {
          this.formData.src = json.data.src;
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
        this.formData.src = res.data.url;
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
