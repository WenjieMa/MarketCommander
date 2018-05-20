<template>
  <div class="order-detail">
    <el-form :model="orderData" label-position="right" label-suffix="" label-width="150px">
      <el-col :span="12">
        <el-form-item label="订单id">
          {{orderData.id}}
        </el-form-item>
        <el-form-item label="订单种类">
          {{orderData.type}}
        </el-form-item>
        <el-form-item label="总价">
          {{orderData.sumprice}}
        </el-form-item>
        <el-form-item label="购买id">
          {{orderData.userid}}
        </el-form-item>
        <el-form-item label="收货地址">
          {{orderData.address}}
        </el-form-item>
        <el-form-item label="收货人手机号">
          {{orderData.phone}}
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="快递号">
          <span v-if="orderData.state >1">
            {{orderData.deliveryid}}
          </span>
          <span v-if="orderData.state <=1">
            <el-input size="mini" v-model="deliveryid" placeholder="请填写物流编号"></el-input>
          </span>
        </el-form-item>
        <el-form-item label="单内商品">
          <span v-for="item in orderData.orderSmalls" :key="item.id">
            <img :src="item.data.itempic" class="item-img-big-cart" />{{item.data.name}}X {{item.quantity}} 价格：{{item.data.price}}</span>
        </el-form-item>
        <span v-if="orderData.state == 1">
          <el-button type="success" @click="sendOrder()">发货</el-button>
        </span>
      </el-col>
      <router-link :to="{path:'/system/order/list'}">
        <el-button type="primary">返回</el-button>
      </router-link>
    </el-form>
  </div>
</template>
<script>
  import order from '@/services/user/order';
  export default {
    name: 'order-detail',
    data() {
      return {
        deliveryid: '',
        orderData: this.$route.query.orderData || []
      }
    },
    methods: {
      fetchData() {
        console.log('查询订单中');
        this.$loading = true;
        const params = {
          id: this.orderData.id
        }
        order.findordersumbysumid(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.orderData = json.data;
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
      sendOrder() {
        const params = {
          id: this.orderData.id,
          deliveryid: this.deliveryid
        }
        if (confirm('确认发货?')) {
          order.senddelivery(params).then(json => {
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
      }
    },
    created() {
      this.fetchData();
    }

  }

</script>
