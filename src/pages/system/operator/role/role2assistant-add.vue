<template>
  <div class="assistant-list">
    <el-table :data="datas.operData" style="width: 100%">
      <el-table-column label="管理员 ID" prop="id">
      </el-table-column>
      <el-table-column label="管理员昵称" prop="name">
      </el-table-column>
      <el-table-column label="手机号" prop="phone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="grant(scope.row)">赋予</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-link :to="{ path: '/system/operator/role/role2assistant', query:{roleData:this.roleData}}">
      <el-button type="primary">返回</el-button>
    </router-link>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import role from '@/services/system/role'
  export default {
    name: 'assistant-list',
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
          operData: [{
            id: '1',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }, {
            id: '2',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }, {
            id: '3',
            name: '测试管理员',
            phone: '15273202288',
            iseffective: '1'
          }]
        }
      }
    },
    methods: {
      grant(oper) {
        const params = {
          assistantid: oper.id,
          roleid: this.roleData.id
        }
        console.log('管理员id是' + oper.id);
        role.insertRole2Assistant(params).then(json => {
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
      fetchData() {
        this.$loading = true;
        const params = {
          roleid: this.roleData.id,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        role.findallRole2AssistantNone(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.operData = json.data;
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
