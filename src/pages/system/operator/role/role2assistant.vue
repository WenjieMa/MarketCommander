<template>
  <div class="role2assistant">
    <h1>权限{{roleData.name}}(id:{{roleData.id}})的权力范围编辑</h1>
    <router-link :to="{ path: '/system/operator/role/role2assistant-add', query:{roleId:roleData.id ,roleData: roleData}}">
      <el-button type="success" size="mini">新增人员</el-button>
    </router-link>
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
          <el-button type="danger" size="mini" @click="deleteData(scope.row.id,roleData.id)">删除人员</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-link :to="{ path: '/system/operator/role/role-list'}">
      <el-button type="primary">返回</el-button>
    </router-link>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import role from '@/services/system/role'
  export default {
    name: 'role2assistant',
    data() {
      return {
        roleData: this.$route.query.roleData || {
          id: '1',
          name: '测试数据'
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          usedUserData: []
        }
      }
    },
    methods: {
      deleteData(id, roleid) {
        const params = {
          assistantid: id,
          roleid: roleid
        }
        role.deleteRole2Assistant(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '删除成功！',
            type: 'success'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
        })
      },
      fetchData() {
        this.$loading = true;
        const params = {
          roleid: this.roleData.id,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        role.findallRole2Assistant(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.usedUserData = json.data;
          this.pageInfo.pages = json.pages;
          this.pageInfo.total = json.total;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
      },
      changeSize(size) {
        this.pageInfo.size = size;
        this.fetchData();
      },
      changePage(page) {
        this.pageInfo.page = page;
        this.fetchData();
      }
    },
    created() {
      this.fetchData();
    }

  }

</script>
