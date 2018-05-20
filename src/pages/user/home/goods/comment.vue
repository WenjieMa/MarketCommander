<template>
  <div class="comment">
    <el-form :model="orderData" label-position="right" label-suffix="" label-width="150px">
      <el-form-item label="订单id">
        {{orderData.id}}
      </el-form-item>
      <el-form-item label="总价">
        {{orderData.sumprice}}
      </el-form-item>
      <el-form-item label="收货地址">
        {{orderData.address}}
      </el-form-item>
      <el-form-item label="收货人手机号">
        {{orderData.phone}}
      </el-form-item>
      <el-form-item label="快递号">
        {{orderData.deliveryid}}
      </el-form-item>
      <el-form-item label="单内商品">
        <span v-for="item in orderData.orderSmalls" :key="item.id">
          <img :src="item.data.itempic" class="item-img-big-cart" />{{item.data.name}}X {{item.quantity}} 价格：{{item.data.price}}
          <el-rate v-model="item.itemstar" show-score text-color="#ff9900" score-template="{value}">
          </el-rate>
          <el-input v-model="item.recordComment.comment" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" :rows="2" placeholder="请输入内容">
          </el-input>
        </span>
      </el-form-item>
      <el-button type="success" @click="sendComment()">确认评价</el-button>
    </el-form>
  </div>
</template>
<script>
  import order from '@/services/user/order';
  import comment from '@/services/user/comment';
  export default {
    name: 'comment',
    data() {
      return {
        orderData: this.$route.query.orderData || []
      }
    },
    methods: {
      sendComment() {
        const params = this.orderData;
        comment.insert(params).then(json => {
          this.$message({
            showClose: true,
            message: '评价成功!',
            type: 'success'
          });
          this.$router.push({
            path: '/user/shopcart/order/list'
          });
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
