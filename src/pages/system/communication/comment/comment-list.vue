<template>
  <div class="comment-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="formData.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="formData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="评论时间段">
        {{formData.imdate}}
        <el-date-picker v-model="formData.imdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.chatData" style="width: 100%">
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="平均" prop="avgstar">
      </el-table-column>
      <el-table-column label="评论数" prop="count">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="clickDetail(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>

  </div>
</template>
<script>
  import comment from '@/services/user/comment';
  export default {
    name: 'comment-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          imdate: ''
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          chatData: []
        }
      }
    },
    methods: {
      clickDetail(id) {
        const params = {
          id: id,
          page: 1,
          size: 10
        }
        comment.findcommentbyitemid(params).then(json => {
          console.log(json.data);
          this.$router.push({
            path: '/system/communication/comment-detail',
            query: {
              itemid: json.data.infoItem.id,
              commentData: json.data,
              page: 1,
              size: 10
            }
          });
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
      fetchData() {
        console.log('查询订单中');
        this.$loading = true;
        const params = {
          id: this.formData.id || 0,
          name: this.formData.name || null,
          start: this.formData.imdate[0] || null,
          end: this.formData.imdate[1] || null,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        console.log(params);
        comment.finditemcommentsum(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.chatData = json.data;
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
    created() {
      this.fetchData();
    }
  }

</script>
