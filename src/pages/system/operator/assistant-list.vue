<template>
  <div class="assistant-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="管理员id">
        <el-input v-model="formData.id" placeholder="管理员id"></el-input>
      </el-form-item>
      <el-form-item label="管理员昵称">
        <el-input v-model="formData.name" placeholder="管理员昵称"></el-input>
      </el-form-item>
      <el-form-item label="管理员手机号">
        <el-input v-model="formData.phone" placeholder="管理员手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.operatorData" style="width: 100%">
      <el-table-column label="管理员 ID" prop="id">
      </el-table-column>
      <el-table-column label="管理员昵称" prop="name">
      </el-table-column>
      <el-table-column label="手机号" prop="phone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/operator/assistant-detail', query:{assistantData: scope.row}}">
            <el-button type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import operator from '@/services/system/operator'
  export default {
    name: 'assistant-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          phone: ''
        },
        datas: {
          operatorData: []
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
        if (this.formData.name) {
          params.name = this.formData.name;
        }
        if (this.formData.id) {
          params.id = this.formData.id;
        }
        if (this.formData.phone) {
          params.phone = this.formData.phone;
        }
        if (params.name || params.id || params.phone) {
          operator.findbyname(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.operatorData = json.data;
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
          operator.findall(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.operatorData = json.data;
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
