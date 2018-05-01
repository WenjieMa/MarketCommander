<template>
  <div class="role2assistant">
    <h1>权限{{roleData.roleName}}(id:{{roleData.roleId}})的权力范围编辑</h1>
    <el-col :span="12">
      已分配人员：
      <el-table :data="datas.usedUserData" style="width: 100%">
        <el-table-column label="管理员 ID" prop="id">
        </el-table-column>
        <el-table-column label="管理员账号" prop="username">
        </el-table-column>
        <el-table-column label="管理员名称" prop="name">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger">删除人员</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="12">
      未分配人员：
      <el-table :data="datas.userData" style="width: 100%">
        <el-table-column label="管理员 ID" prop="id">
        </el-table-column>
        <el-table-column label="管理员账号" prop="username">
        </el-table-column>
        <el-table-column label="管理员名称" prop="name">
        </el-table-column>
        <el-table-column label="管理员名称" prop="name">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success">添加人员</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <router-link :to="{ path: '/system/operator/role/role-list'}">
      <el-button type="primary">返回</el-button>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'role2assistant',
    data() {
      return {
        roleData: this.$route.query.roleData || {
          roleId: '1',
          roleName: '测试数据'
        },
        datas: {
          usedUserData: [{
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }],
          userData: [{
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }, {
            id: '测试数据',
            username: '测试数据',
            name: '测试数据'
          }]
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
