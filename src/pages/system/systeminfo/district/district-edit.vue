<template>
  <div class="district-edit">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="市级名称">
        <el-input v-model="formData.name" placeholder="市级名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertColumn">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="市级 ID" prop="id">
      </el-table-column>
      <el-table-column label="市级名称" prop="name">
      </el-table-column>
      <el-table-column label="序号">
        <template slot-scope="scope">
          {{scope.row.index}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="moveOn(scope.row.id)" size="mini">
            <i class="el-icon-arrow-up"></i>上移</el-button>
          <el-button type="danger" @click="moveOn(scope.row.id)" size="mini">
            <i class="el-icon-delete"></i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'district-edit',
    data() {
      return {
        formData: {
          name: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '测试市级',
            index: '1'
          }, {
            id: '2',
            name: '测试市级',
            index: '2'
          }, {
            id: '3',
            name: '测试市级',
            index: '3'
          }]
        }
      }
    },
    methods: {
      insertColumn() {

      },
      moveOn(id) {

      },
      changeEffective(ef) {

      }
    }
  }

</script>
