<template>
  <div class="start-columns-detail">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="二级栏目名称">
        <el-input v-model="formData.text" placeholder="二级栏目名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertData">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.columnData" style="width: 100%">
      <el-table-column label="二级栏目 ID" prop="id">
      </el-table-column>
      <el-table-column label="二级栏目名称" prop="text">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteData(scope.row.id)" size="mini">
            <i class="el-icon-delete"></i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import start from '@/services/system/main-page/start'
  export default {
    name: 'start-columns-detail',
    data() {
      return {
        formData: {
          text: '',
          parentid: this.$route.query.columnId
        },
        datas: {
          columnData: [{
            id: '3',
            name: '测试二级栏目',
            index: '3'
          }]
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
      deleteData(id) {
        const params = {
          id: id + ''
        }
        start.delete2(params).then(json => {
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
          parentid: this.formData.parentid,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        start.findall2(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.columnData = json.data;
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
      insertData() {
        const params = this.formData
        start.insert2(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.fetchData();
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
