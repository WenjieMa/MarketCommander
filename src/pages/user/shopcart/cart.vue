<template>
  <div class="cart">
    <el-table :data="cartData" style="width: 100%" :header-row-class-name="rowClass">
      <el-table-column label="商品">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/assistant/user-detail', query:{goodsData:scope.row['data']}}">
            <div>
              <span class="item-text-big-cart">{{scope.row['data']['name']}}</span>
              <img :src="scope.row['data']['itempic']" class="item-img-big-cart" />
            </div>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
          <el-input-number size="mini" v-model="scope.row['quantity']" :min="1" :max="999" @change="changeValue"></el-input-number>
          <el-button v-show="scope.row['quantity']==1" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          {{scope.row['data']['price']}}
        </template>
      </el-table-column>
    </el-table>
    收货地址:<el-input size="mini" v-model="$store.state.user.shopcart.address" placeholder="收货地址"></el-input>
    <div>
      <el-button type="success" @click="submitOrder">提交订单</el-button>
    </div>
  </div>
</template>
<script>
  import order from '@/services/user/order';
  export default {
    name: 'cart',
    data() {
      return {
        data: {},
        carts: [],
        sum: 0
      }
    },
    methods: {
      submitOrder() {
        if (confirm('确认提交订单？')) {
          this.$store.state.user.shopcart.sumprice = this.countPrice(this.$store.state.user.shopcart.data);
          const params = {
            orderSmalls: this.cartItemSplice(this.$store.state.user.shopcart.data),
            userid: this.$store.state.user.info.id,
            type: '1',
            sumprice: this.$store.state.user.shopcart.sumprice,
            address: this.$store.state.user.shopcart.address,
            state: 0,
            phone: this.$store.state.user.info.phone,
            count: this.$store.state.user.shopcart.count
          }
          this.$store.state.user.shopcart = {
            count: 0,
            data: [],
            sumprice: 0,
            address: ''
          }
          order.insert(params).then(json => {
            this.$message({
              showClose: true,
              message: '创建订单成功！',
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
        }
      },
      rowClass({
        row,
        rowIndex
      }) {
        return 'ta-center';
      },
      changeValue(value) {
        console.log(value);
      }
    },
    computed: {
      cartData() {
        return this.cartItemSplice(this.$store.state.user.shopcart.data);
      }
    },
    created() {
      this.changeValue(1);
    }
  }

</script>
