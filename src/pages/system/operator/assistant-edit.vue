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
            <el-option label="男" :value="true"></el-option>
            <el-option label="女" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="管理员密码">
          {{assistantData.password}}
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="assistantData.phone" placeholder="输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="assistantData.name" placeholder="输入真实姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="创建时间">
          {{assistantData.createdate}}
        </el-form-item>
        <el-form-item label="上一次修改时间">
          {{assistantData.updatedate}}
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
        <el-form-item>
          <router-link :to="{path:'/system/operator/assistant-detail', query:{assistantData: assistantData}}">
            <el-button type="primary">返回</el-button>
          </router-link>
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
        assistantData: this.$route.query.assistantData
      }
    },
    methods: {
      onSubmit() {
        const params = {
          id: this.assistantData.id,
          name: this.assistantData.name,
          username: this.assistantData.username,
          password: this.assistantData.password,
          gender: this.assistantData.gender,
          phone: this.assistantData.phone
        }
        operator.update(params).then(json => {
          console.log(json);
          this.$message({
            showClose: true,
            message: '更新成功!',
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
      }
    }
  }

</script>
