<template>
  <div class="order-list">
    <template v-for="cartData in orderDatas">
      {{'订单id:'+ cartData.id}}
      <el-table :data="cartData.orderSmalls" :key="cartData.id+Math.random()" style="width: 100%" :header-row-class-name="rowClass">
        <el-table-column label="商品">
          <template slot-scope="scope">
            <router-link :to="{path:'/user/goods/goods-single', query:{goodsData:scope.row['data']}}">
              <div>
                <span class="item-text-big-cart">{{scope.row['data']['name']}}</span>
                <img :src="scope.row['data']['itempic']" class="item-img-big-cart" />
              </div>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            {{scope.row['quantity']}}
          </template>
        </el-table-column>
        <el-table-column label="价格">
          <template slot-scope="scope">
            {{scope.row['data']['price']}}
          </template>
        </el-table-column>
        <el-table-column label="小计">
          <template slot-scope="scope">
            {{scope.row['data']['price']*scope.row['quantity']}}
          </template>
        </el-table-column>
      </el-table>
      <div :key="cartData.id+Math.random()">
        <div>总价{{cartData.sumprice}} </div>
        <div> 收货地址:{{cartData.address}}</div>
        <div>
          <span v-if="cartData.state == 2">物流编号{{cartData.deliveryid}}</span>
        </div>

        <!-- 0:未付款1:已付款未发货2:已发货3:已收货4:已评价 -->
        <el-button type="success" @click="payOrder(cartData)" v-if="cartData.state == 0">付款</el-button>
        <span v-if="cartData.state == 1">待发货</span>
        <el-button type="success" @click="getOrder(cartData)" v-if="cartData.state == 2">确认收货</el-button>
        <router-link v-if="cartData.state==3 " :to="{path:'/user/goods/comment', query:{orderData:cartData}}">
          <el-button type="success">评价</el-button>
        </router-link>
        <span v-if="cartData.state==4 ">已评价</span>
      </div>
    </template>
    <div style="text-align:center ">
      <el-pagination @size-change="changeSize " @current-change="changePage " :current-page="pageInfo.page
          " :page-sizes="[1, 2, 5] " :page-size="pageInfo.size " layout="prev, pager, next " small :total="pageInfo.total ">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import order from '@/services/user/order';
  export default {
    name: 'order-list',
    data() {
      return {
        data: {},
        carts: [],
        sum: 0,
        orderDatas: [],
        pageInfo: {
          page: 1,
          pages: 1,
          size: 2,
          total: 1
        }
      }
    },
    methods: {
      payOrder(data) {
        if (confirm('确认付款?')) {
          data.state = 1;
          order.updatestate(data).then(json => {
            console.log(json);
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
      getOrder(data) {
        if (confirm('确认收货?')) {
          data.state = 3;
          order.updatestate(data).then(json => {
            console.log(json);
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
      changeSize(size) {
        this.pageInfo.size = size;
        this.fetchData();
      },
      changePage(page) {
        this.pageInfo.page = page;
        this.fetchData();
      },
      fetchData() {
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size,
          id: this.$store.state.user.info.id
        }
        order.findordersumbyuserid(params).then(json => {
          console.log(json);
          this.orderDatas = json.data;
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
    created() {
      this.fetchData();
    }
  }

</script>
