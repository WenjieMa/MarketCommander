<template>
  <div class="district-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="省级名称">
        <el-input v-model="formData.name" placeholder="省级名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加省级</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.provinceData" style="width: 100%">
      <el-table-column label="省级 ID" prop="id">
      </el-table-column>
      <el-table-column label="省级名称" prop="name">
      </el-table-column>
      <el-table-column label="序号" prop="index">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/systeminfo/district/district-edit', query:{provinceId: scope.row.id ,provinceData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'district-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          index: ''
        },
        datas: {
          provinceData: [{
            id: '1',
            name: '测试省级',
            index: '1'
          }, {
            id: '2',
            name: '测试省级头',
            index: '2'
          }, {
            id: '3',
            name: '测试省级',
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
