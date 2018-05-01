<template>
  <div class="start-columns-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="一级栏目名称">
        <el-input v-model="formData.name" placeholder="一级栏目名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加一级栏目</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="一级栏目 ID" prop="id">
      </el-table-column>
      <el-table-column label="一级栏目名称" prop="name">
      </el-table-column>
      <el-table-column label="一级栏目头名称" prop="headname">
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
            name: '测试一级栏目',
            headname: '测试一级栏目头',
            index: '1'
          }, {
            id: '2',
            name: '测试一级栏目',
            headname: '测试一级栏目头',
            index: '2'
          }, {
            id: '3',
            name: '测试一级栏目',
            headname: '测试一级栏目头',
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
