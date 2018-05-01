<template>
  <div class="assistant-detail">
    <el-form :model="assistantData" label-position="right" label-suffix="" label-width="150px">
      <el-col span="12">
        <el-form-item label="管理员头像">
          <img :src="assistantData.headpic" />
        </el-form-item>
        <el-form-item label="管理员id">
          {{assistantData.id}}
        </el-form-item>
        <el-form-item label="管理员账号">
          {{assistantData.assistantname}}
        </el-form-item>
        <el-form-item label="管理员性别">
          {{assistantData.gender}}
        </el-form-item>
        <el-form-item label="当前状态">
          {{assistantData.iseffective}}
        </el-form-item>
        <el-form-item label="手机号">
          {{assistantData.phone}}
        </el-form-item>
        <el-form-item label="email">
          {{assistantData.email}}
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="昵称">
          {{assistantData.nickname}}
        </el-form-item>
        <el-form-item label="真实姓名">
          {{assistantData.name}}
        </el-form-item>
        <el-form-item label="生日">
          {{assistantData.birthday}}
        </el-form-item>
        <el-form-item label="操作">
          <router-link :to="{path:'/system/operator/assistant-edit', query:{assistantId: assistantData.id ,assistantData: assistantData}}">
            <el-button type="primary">编辑</el-button>
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
        assistantid: this.$route.query.id || -1,
        assistantData: {
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
      fetchData(id = '-1') {
        if (id > 0) {

        }
      },
      onSubmit() {

      }
    },
    created() {
      this.fetchData(this.itemid);
    }

  }

</script>
