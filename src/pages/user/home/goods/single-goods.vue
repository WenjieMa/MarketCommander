<template>
  <div class="single-goods">
    <div style="padding: 14px;">
      <span>{{goodsData.name}}</span>
      <div class="bottom clearfix">
        <img :src="goodsData.itempic" class="item-img-show" id="item-img-showid" />
        <div>价格:{{goodsData.price}}</div>
        <div>是否打折:{{goodsData.isoff == true?'是':'否'}}</div>
        <div v-show="goodsData.isoff">打折系数:{{goodsData.discount}}</div>
        <div>库存:{{goodsData.store}}</div>
        <div>介绍:{{goodsData.description}}</div>
        <div>标签:
          <el-tag type="success">{{goodsData.textsmall}}</el-tag>
        </div>
        <div>详细介绍:{{goodsData.textbig}}</div>
        <el-button type="primary" @click="addToCart(goodsData)">加入购物车</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  // import goods from '@/services/system/item';
  export default {
    name: 'single-goods',
    data() {
      return {}
    },
    methods: {
      addToCart(goods) {
        console.log(this.$store.state.user.shopcart.data);
        if (this.$store.state.user.shopcart.data[goods.id]) {
          this.$store.state.user.shopcart.data[goods.id]['quantity'] =
            this.$store.state.user.shopcart.data[goods.id]['quantity'] + 1
        } else {
          this.$store.state.user.shopcart.data[goods.id] = {
            itemid: goods.id,
            data: goods,
            quantity: 1
          }
          this.$store.state.user.shopcart.count++;
        }
      },
      deleteCart(id) {
        delete this.$store.state.user.shopcart.data[id];
        this.$store.state.user.shopcart.count--;
      },
      minusCart(id) {
        if (this.$store.state.user.shopcart.data[id]) {
          this.$store.state.user.shopcart.data[id]['quantity'] =
            this.$store.state.user.shopcart.data[id]['quantity'] - 1
          if (this.$store.state.user.shopcart.data[id]['quantity'] == 0) {
            delete this.$store.state.user.shopcart.data[id];
            this.$store.state.user.shopcart.count--;
          }
        }
      },
      addCart(id) {
        this.$store.state.user.shopcart.data[id]['quantity'] =
          this.$store.state.user.shopcart.data[id]['quantity'] + 1
        this.$store.state.user.shopcart.count++;
      }
    },
    computed: {
      goodsData() {
        return this.$route.query.goodsData;
      }
    }
  }

</script>
