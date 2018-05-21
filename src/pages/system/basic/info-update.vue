<template>
  <div class="assistant-edit">
    <el-form :model="assistantData" label-position="right" label-suffix="" label-width="150px">
      <el-col :span="12">
        <el-form-item label="管理员id">
          {{assistantData.id}}
        </el-form-item>
        <el-form-item label="管理员账号">
          {{assistantData.username}}
        </el-form-item>
        <el-form-item label="管理员性别">
          <el-select v-model="assistantData.gender" placeholder="管理员性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="assistantData.phone" placeholder="输入手机号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="真实姓名">
          <el-input v-model="assistantData.name" placeholder="输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
  import operator from '@/services/system/operator'
  export default {
    name: 'assistant-edit',
    data() {
      return {
        assistantid: this.$route.query.id || -1,
        assistantData: this.$store.state.operator.info || {
          id: '测试数据',
          assistantname: '测试数据',
          headpic: 'headpic',
          gender: '测试数据',
          iseffective: '测试数据',
          phone: '测试数据',
          email: '测试数据',
          nickname: '测试数据',
          name: '测试数据',
          birthday: '测试数据'
        }
      }
    },
    methods: {
      fetchData() {
        const params = {
          id: this.$store.state.operator.id,
          page: 1,
          size: 1
        }
        operator.findbyname(params).then(json => {
          this.assistantData = json.data[0];
           this.$message({
            showClose: true,
            message: '修改成功！',
            type: 'success'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错',
            type: 'error'
          });
          this.$loading = false;
        });
      },
      onSubmit() {
        operator.update(this.assistantData).then(json => {
          this.fetchData();
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错',
            type: 'error'
          });
          this.$loading = false;
        });
      },
      handleAvatarSuccess(res, file) {
        this.assistantData.headpic = URL.createObjectURL(file.raw);
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
