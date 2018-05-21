<template>
  <div class="hot-search">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="输入热门词">
        <el-input v-model="formData.name" placeholder="输入热门词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.hotData" style="width: 100%">
      <el-table-column label="搜索词 ID" prop="id">
      </el-table-column>
      <el-table-column label="搜索词" prop="name">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.iseffective == false">
            <el-button type="primary" @click="changeEffective(scope.row)">
              设为热词
            </el-button>
          </template>
          <template v-if="scope.row.iseffective == true">
            <el-button type="warning" @click="changeEffective(scope.row)">
              取消热词
            </el-button>
          </template>
          <el-button type="danger" @click="deleteHotSearch(scope.row.id)">
            删除热词
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import hotsearch from '@/services/system/main-page/hotsearch'
  export default {
    name: 'hot-search',
    data() {
      return {
        formData: {
          name: ''
        },
        datas: {
          hotData: [{
            id: '1',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '1'
          }, {
            id: '2',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '0'
          }, {
            id: '3',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '1'
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
      changeEffective(objVo) {
        const params = objVo;
        hotsearch.changeeff(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '修改成功！',
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
      deleteHotSearch(id) {
        const params = {
          id: id + ''
        }
        hotsearch.delete(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '修改成功！',
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
        hotsearch.findall(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.hotData = json.data;
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
        const params = {
          name: this.formData.name
        }
        hotsearch.insert(params).then(json => {
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
