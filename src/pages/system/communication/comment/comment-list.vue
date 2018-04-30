<template>
  <div class="comment-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="formData.itemid" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="评论时间段">
        {{formData.createdate}}
        <el-date-picker v-model="formData.createdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.chatData" style="width: 100%">
      <el-table-column label="商品 ID" prop="itemid">
      </el-table-column>
      <el-table-column label="商品名称" prop="itemname">
      </el-table-column>
      <el-table-column label="星级" prop="star">
      </el-table-column>
      <el-table-column label="评论数" prop="commentcount">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/communication/comment-detail', query:{itemid:scope.row.itemid}}">
            <el-button size="mini" type="primary">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'comment-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          createdate: ''
        },
        datePickParam: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        datas: {
          chatData: [{
            itemid: '1',
            itemname: '测试商品',
            star: '3.7',
            commentcount: '150'
          }, {
            itemid: '1',
            itemname: '测试商品',
            star: '3.7',
            commentcount: '150'
          }, {
            itemid: '1',
            itemname: '测试商品',
            star: '3.7',
            commentcount: '150'
          }, {
            itemid: '1',
            itemname: '测试商品',
            star: '3.7',
            commentcount: '150'
          }, {
            itemid: '1',
            itemname: '测试商品',
            star: '3.7',
            commentcount: '150'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }

</script>
