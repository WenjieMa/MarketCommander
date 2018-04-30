<template>
  <div class="start-columns-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="栏目id">
        <el-input v-model="formData.id" placeholder="栏目id"></el-input>
      </el-form-item>
      <el-form-item label="栏目名称">
        <el-input v-model="formData.name" placeholder="栏目名称"></el-input>
      </el-form-item>
      <el-form-item label="栏目序号">
        <el-input v-model="formData.index" placeholder="栏目序号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column type="expand">
      </el-table-column>
      <el-table-column label="栏目 ID" prop="id">
      </el-table-column>
      <el-table-column label="栏目名称" prop="name">
      </el-table-column>
            <el-table-column label="栏目头名称" prop="headname">
      </el-table-column>
      <el-table-column label="序号" prop="index">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/main-page/start-columns-detail', query:{columnId: scope.row.id ,columnData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'start-columns-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          headname: '',
          index: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '测试栏目',
            headname: '测试栏目头',
            index: '1'
          }, {
            id: '2',
            name: '测试栏目',
            headname: '测试栏目头',
            index: '2'
          }, {
            id: '3',
            name: '测试栏目',
            headname: '测试栏目头',
            index: '3'
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
