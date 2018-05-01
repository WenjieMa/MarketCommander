<template>
  <div class="express-list">
    <router-link :to="{path:'/system/systeminfo/express/express-edit', query:{add: true}}">
      <el-button type="success">录入快递公司</el-button>
    </router-link>
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="快递公司id">
        <el-input v-model="formData.id" placeholder="快递公司id"></el-input>
      </el-form-item>
      <el-form-item label="快递公司名称">
        <el-input v-model="formData.name" placeholder="快递公司名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.expressData" style="width: 100%">
      <el-table-column label="快递公司 ID" prop="id">
      </el-table-column>
      <el-table-column label="快递公司名称" prop="name">
      </el-table-column>
      <el-table-column label="序号" prop="index">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/systeminfo/express/express-detail', query:{expressId: scope.row.id ,expressData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'express-list',
    data() {
      return {
        formData: {
          name: '',
          id: ''
        },
        datas: {
          expressData: [{
            id: '1',
            name: '测试快递公司',
            index: '1'
          }, {
            id: '2',
            name: '测试快递公司头',
            index: '2'
          }, {
            id: '3',
            name: '测试快递公司',
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
