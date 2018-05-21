<template>
  <div class="comment-detail">
    <h1>商品{{datas.commentData.infoItem.name}}(id:{{datas.commentData.infoItem.id}})的评论内容</h1>
    <el-table :data="datas.commentData.commentReplyVos" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="评论内容">
              {{scope.row.recordComment.comment}}
            </el-form-item>
            <el-form-item>
            </el-form-item>
            <el-form-item label="回复内容">
              <el-input v-model="scope.row.recordCommentReply.text" placeholder="回复内容" v-if="scope.row.recordComment.replyid == -1"></el-input>
              <template v-if="scope.row.recordComment.replyid != -1"> {{scope.row.recordCommentReply.text}} </template>
            </el-form-item>
            <el-form-item label="回复管理员" v-if="scope.row.recordComment.replyid != -1">
              <template>{{scope.row.infoOperator.name}}</template>
            </el-form-item>
            <el-form-item label="操作" v-if="scope.row.recordComment.replyid == -1">
              <el-button type="success" @click="onReply(scope.row)">确认回复</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="发送方">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/assistant/user-detail', query:{data: scope.row.infoUser}}">
            <img :src="scope.row.infoUser.headpic" class="item-img-big-cart" />用户：{{scope.row.infoUser.nickname}}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="时间">
        <template slot-scope="scope">
          {{scope.row.recordComment.createdate}}
        </template>
      </el-table-column>
      <el-table-column label="等级">
        <template slot-scope="scope">
          <template v-if="scope.row.orderSmall.itemstar >= 4">
            <span class="success-text">好</span>
          </template>
          <template v-if="scope.row.orderSmall.itemstar >= 3 && scope.row.orderSmall.itemstar < 4">
            <span class="warning-text">中</span>
          </template>
          <template v-if="scope.row.orderSmall.itemstar < 3">
            <span class="danger-text">差</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="星级" style="float:left">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.orderSmall.itemstar" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
        </template>
      </el-table-column>
      <el-table-column label="当前状态">
        <template slot-scope="scope">
          <template v-if="scope.row.recordComment.replyid == -1">
            未回复
          </template>
          <template v-if="scope.row.recordComment.replyid !== -1">
            已回复
          </template>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import comment from '@/services/user/comment';
  export default {
    name: 'comment-detail',
    data() {
      return {
        itemid: this.$route.query.itemid || -1,
        commentData: [],
        formData: {
          commentid: '',
          text: ''
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          commentData: this.$route.query.commentData
        }
      }
    },
    methods: {
      tableRowClassName({
        row,
        rowIndex
      }) {
        console.log(row);
        if (row.orderSmall.itemstar >= 4) {
          return 'success-row';
        } else if (row.orderSmall.itemstar >= 3 && row.orderSmall.itemstar < 4) {
          return 'warning-row';
        } else if (row.orderSmall.itemstar < 3) {
          return 'danger-row';
        }
      },
      onReply(obj) {
        console.log(obj);
        obj.recordCommentReply.assistantid = this.$store.state.operator.info.id;
        const params = {
          recordComment: obj.recordComment,
          recordCommentReply: obj.recordCommentReply
        }

        comment.reply(params).then(json => {
          this.$message({
            showClose: true,
            message: '回复成功！',
            type: 'success'
          });
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
      fetchData() {
        const params = {
          id: this.itemid,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        comment.findcommentbyitemid(params).then(json => {
          this.datas.commentData = json.data;
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
