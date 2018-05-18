<template>
  <div class="user-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="用户id">
        <el-input v-model="formData.id" placeholder="用户id"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="formData.nickname" placeholder="用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input v-model="formData.phone" placeholder="用户手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="用户 ID" prop="id">
      </el-table-column>
      <el-table-column label="用户昵称" prop="nickname">
      </el-table-column>
      <el-table-column label="手机号" prop="phone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/assistant/user-detail', query:{userId: scope.row.id ,userData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import user from '@/services/user/user'
  export default {
    name: 'user-list',
    data() {
      return {
        formData: {
          nickname: '',
          id: '',
          phone: ''
        },
        datas: {
          userData: []
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
      fetchData() {
        this.$loading = true;
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        if (this.formData.nickname) {
          params.nickname = this.formData.nickname;
        }
        if (this.formData.id) {
          params.id = this.formData.id;
        } else {
          params.id = 0
        }
        if (this.formData.phone) {
          params.phone = this.formData.phone;
        }
        if (params.nickname || params.id || params.phone) {
          user.findbyname(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.userData = json.data;
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
        } else {
          user.findall(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.userData = json.data;
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
        }
      },
      onSubmit() {
        this.fetchData();
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
