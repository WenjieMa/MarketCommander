<template>
  <div class="role-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="权限名称">
        <el-input v-model="formData.name" placeholder="权限名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加权限</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="权限 ID" prop="id">
      </el-table-column>
      <el-table-column label="权限名称" prop="name">
      </el-table-column>
      <el-table-column label="权限编码" prop="code">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/operator/role/role-edit', query:{roleId: scope.row.id ,roleData: scope.row}}">
            <el-button type="primary">编辑权限</el-button>
          </router-link>
           <router-link :to="{path:'/system/operator/role/role2assistant', query:{roleId: scope.row.id ,roleData: scope.row}}">
            <el-button type="primary">分配权限</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'role-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          headname: '',
          code: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '测试权限',
            code: '1'
          }, {
            id: '2',
            name: '测试权限',
            code: '2'
          }, {
            id: '3',
            name: '测试权限',
            code: '3'
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
