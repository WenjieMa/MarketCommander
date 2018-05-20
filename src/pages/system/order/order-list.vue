<template>
  <div class="order-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="订单id">
        <el-input v-model="formData.id" placeholder="订单id"></el-input>
      </el-form-item>
      <el-form-item label="用户id">
        <el-input v-model="formData.userid" placeholder="用户id"></el-input>
      </el-form-item>
      <el-form-item label="当前状态">
        <el-select v-model="formData.state" placeholder="当前状态">
          <el-option label="未付款" :value="0"></el-option>
          <el-option label="未发货" :value="1"></el-option>
          <el-option label="已发货" :value="2"></el-option>
          <el-option label="已收货" :value="3"></el-option>
          <el-option label="已评价" :value="4"></el-option>
          <el-option label="失效" :value="-1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单创建时间">
        {{formData.createdate}}
        <el-date-picker v-model="formData.imdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.orderData" style="width: 100%">
      <el-table-column label="订单 ID" prop="id">
      </el-table-column>
      <el-table-column label="总价" prop="totalprice">
      </el-table-column>
      <el-table-column label="用户id" prop="userid">
      </el-table-column>
      <el-table-column label="当前状态">
        <template slot-scope="scope">
          <span v-if="scope.row.state == 0">未付款
          </span>
          <span v-if="scope.row.state == 1">未发货
          </span>
          <span v-if="scope.row.state == 2">已发货
          </span>
          <span v-if="scope.row.state == 3">已收货
          </span>
          <span v-if="scope.row.state == 4">已评价
          </span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="物流编号" :width="300">
        <template slot-scope="scope">
          <span v-if="scope.row.state >1">{{scope.row.deliveryid}}
          </span>
          <span v-if="scope.row.state == 1">
            <el-input size="mini" v-model="scope.row.deliveryid" @keyup="show(this)" placeholder="请填写物流编号"></el-input>
          </span>
          <span v-if="scope.row.state == 0">
            等待用户付款
          </span>
        </template>
      </el-table-column> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/order/detail', query:{orderData: scope.row}}">
            <el-button type="primary">编辑</el-button>
          </router-link>
          <!-- <span v-if="scope.row.state == 1">
            <el-button type="danger" @click="sendOrder(scope.row)" size="mini">发货</el-button>
          </span>
          <span v-if="scope.row.state !== 1">不可操作
          </span> -->
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import order from '@/services/user/order';

  export default {
    name: 'order-list',
    data() {
      return {
        datas: {
          orderData: []
        },
        tempData: [],
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        formData: {
          id: '0',
          userid: '0',
          state: '',
          imdate: ''
        }
      }
    },
    methods: {
      show(obj) {
        console.log(obj.value);
      },
      sendOrder(data) {
        if (confirm('确认发货?')) {
          data.state = 2;
          order.updatestate(data).then(json => {
            console.log(json);
            this.$message({
              showClose: true,
              message: '发货成功！',
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
        }
      },
      fetchData() {
        console.log('查询订单中');
        this.$loading = true;
        const params = {
          id: this.formData.id,
          userid: this.formData.userid,
          state: this.formData.state,
          start: this.formData.imdate[0],
          end: this.formData.imdate[1],
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        order.findordersumbyparams(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.tempData = json.data;
          this.datas.orderData = json.data;
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
