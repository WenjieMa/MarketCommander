<template>
  <div class="assistant-detail">
    <el-form :model="assistantData" label-position="right" label-suffix="" label-width="150px">
      <el-col :span="12">
        <el-form-item label="管理员id">
          {{assistantData.id}}
        </el-form-item>
        <el-form-item label="管理员账号">
          {{assistantData.username}}
        </el-form-item>
        <el-form-item label="管理员性别">
          {{toGender(assistantData.gender)}}
        </el-form-item>
        <el-form-item label="手机号">
          {{assistantData.phone}}
        </el-form-item>
        <el-form-item label="姓名">
          {{assistantData.name}}
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="创建时间">
          {{assistantData.createdate}}
        </el-form-item>
        <el-form-item label="上一次修改时间">
          {{assistantData.updatedate}}
        </el-form-item>
        <el-form-item label="操作">
          <router-link :to="{path:'/system/operator/assistant-edit', query:{assistantData: assistantData}}">
            <el-button type="primary">编辑</el-button>
          </router-link>
          <router-link :to="{path:'/system/operator/assistant-list'}">
            <el-button type="primary">返回</el-button>
          </router-link>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'assistant-detail',
    data() {
      return {
        assistantData: this.$route.query.assistantData
      }
    },
    methods: {}
  }

</script>
