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
    <el-table :data="datas.roleData" style="width: 100%">
      <el-table-column label="权限 ID" prop="id">
      </el-table-column>
      <el-table-column label="权限名称" prop="name">
      </el-table-column>
      <el-table-column label="权限编码" prop="rolecode">
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
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import role from '@/services/system/role'
  export default {
    name: 'role-list',
    data() {
      return {
        formData: {
          name: ''
        },
        datas: {
          roleData: []
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        }
      }
    },
    methods: {
      insertData() {
        const params = this.formData
        role.update(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '更新成功!',
            type: 'success'
          });
          this.$loading = false;
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
      deleteData(id) {
        const params = {
          id: id + ''
        }
        role.delete(params).then(json => {
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
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        role.findall(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.roleData = json.data;
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
      onSubmit() {
        this.insertData();
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
