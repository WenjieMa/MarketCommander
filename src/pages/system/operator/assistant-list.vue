<template>
  <div class="assistant-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="管理员id">
        <el-input v-model="formData.id" placeholder="管理员id"></el-input>
      </el-form-item>
      <el-form-item label="管理员昵称">
        <el-input v-model="formData.name" placeholder="管理员昵称"></el-input>
      </el-form-item>
      <el-form-item label="管理员手机号">
        <el-input v-model="formData.phone" placeholder="管理员手机号"></el-input>
      </el-form-item>
      <el-form-item label="冻结状态">
        <el-select v-model="formData.iseffective" placeholder="冻结状态">
          <el-option label="已冻结" value="0"></el-option>
          <el-option label="未冻结" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="管理员 ID" prop="id">
      </el-table-column>
      <el-table-column label="管理员昵称" prop="name">
      </el-table-column>
      <el-table-column label="手机号" prop="phone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/operator/assistant-detail', query:{userId: scope.row.id ,userData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'assistant-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          phone: '',
          iseffective: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }, {
            id: '2',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }, {
            id: '3',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      },
      changeEffective(ef) {

      }
    }
  }

</script>
