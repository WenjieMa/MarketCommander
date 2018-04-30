<template>
  <div class="order-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="订单id">
        <el-input v-model="formData.orderid" placeholder="订单id"></el-input>
      </el-form-item>
      <el-form-item label="单内商品id">
        <el-input v-model="formData.itemid" placeholder="单内商品id"></el-input>
      </el-form-item>
      <el-form-item label="当前状态">
        <el-select v-model="formData.issended" placeholder="当前状态">
          <el-option label="未发货" value="1"></el-option>
          <el-option label="已发货" value="2"></el-option>
          <el-option label="未收货" value="3"></el-option>
          <el-option label="已收货" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单创建时间">
        {{formData.createdate}}
        <el-date-picker v-model="formData.createdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.importData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="订单名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="订单 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="总价格">
              <span>{{ props.row.sumprice }}</span>
            </el-form-item>
            <el-form-item label="收件人">
              <span>{{ props.row.reciver }}</span>
            </el-form-item>
            <el-form-item label="单内商品">
              <span v-for="item in props.row.items" :key="item.id">{{item.name}}X {{item.quantity}}</span>
            </el-form-item>
            <el-form-item label="快递公司">
              <span>{{ props.row.express }}</span>
            </el-form-item>
            <el-form-item label="快递单号">
              <span>{{ props.row.deliveryid }}</span>
            </el-form-item>
            <el-form-item label="购买时间">
              <span>{{ props.row.createdate }}</span>
            </el-form-item>
            <el-form-item label="当前状态">
              <span>{{ props.row.orderstate }}</span>
            </el-form-item>
            <el-form-item label="操作">
              <router-link :to="{path:'/system/order/detail', query:{itemId: props.row.id ,itemData: props.row}}">
                <el-button type="primary">详情</el-button>
              </router-link>
              <el-button type="primary" @click="onSubmit()">确认发货</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="id">
      </el-table-column>
      <el-table-column label="订单名称" prop="name">
      </el-table-column>
      <el-table-column label="总价" prop="sumprice">
      </el-table-column>
      <el-table-column label="收件人" prop="reciver">
      </el-table-column>
      <el-table-column label="当前状态" prop="orderstate">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'order-list',
    data() {
      return {
        datas: {
          importData: [{
            name: '测试数据',
            id: '测试数据',
            sumprice: '测试数据',
            reciver: '测试数据',
            orderstate: '测试数据',

            deliveryid: '测试数据',
            express: '测试数据',
            items: [{
              itemid: '',
              name: '',
              quantity: ''
            }]
          }]
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
        formData: {
          orderid: '',
          itemid: '',
          issended: '',
          createdate: ''
        }
      }
    },
    methods: {
      onSubmit() {

      },
      onReject() {

      }
    }
  }

</script>
