<template>
  <div class="announcement-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="输入公告">
        <el-input v-model="formData.text" placeholder="输入公告"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.anounceData" style="width: 100%">
      <el-table-column label="公告 ID" prop="id">
      </el-table-column>
      <el-table-column label="公告" prop="text">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.iseffective == '0'">
            <el-button type="primary" @click="changeEffective(scope.row)">
              设为公告
            </el-button>
          </template>
          <template v-if="scope.row.iseffective  == '1'">
            <el-button type="warning" @click="changeEffective(scope.row)">
              取消公告
            </el-button>
          </template>
          <el-button type="danger" @click="deleteData(scope.row.id)">
              删除公告
            </el-button>
        </template>
      </el-table-column>
    </el-table>
        <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import anounce from '@/services/system/main-page/anounce'
  export default {
    name: 'announcement-list',
    data() {
      return {
        formData: {
          text: ''
        },
        datas: {
          anounceData: [{
            id: '1',
            name: '这是一条测试用公告',
            iseffective: '1'
          }, {
            id: '2',
            name: '这是一条测试用公告',
            iseffective: '0'
          }, {
            id: '3',
            name: '这是一条测试用公告',
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
        anounce.changeeff(params).then(json => {
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
      deleteData(id) {
        const params = {
          id: id + ''
        }
        anounce.delete(params).then(json => {
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
        anounce.findall(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.anounceData = json.data;
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
        anounce.insert(params).then(json => {
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
