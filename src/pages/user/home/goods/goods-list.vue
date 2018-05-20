<template>
  <div class="goods-list">
    <div style="width:100%;height:60px;" class="searchDiv">
      <el-select v-model="formData.searchText" filterable placeholder="请输入内容" style="width:85%;float:left">
        <template v-for="hot in datas.hotData">
          <el-option v-show="hot.iseffective" :label="hot.name" :value="hot.name" :key="hot.id">
          </el-option>
        </template>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="onSubmit(formData.searchText, '')" style="width:15%;float:left"></el-button>
    </div>
    当前查询条件：名称：{{formData.name == ''?"全部":formData.name}},种类id:{{formData.typeid == 0?"全部":formData.typeid}}
    <el-button size="mini" @click="onClear()">清空种类</el-button>
    <el-collapse v-model="formData.type" accordion>
      <template v-for="value in datas.columnData">
        <el-collapse-item :title="value.name" :name="value.id" :key="value.id">
          <template v-for="column in value.h2s">
            <el-col :span="6" :key="column.id">
              <div @click="changeType(column)">
                <el-card>{{column.text}}</el-card>
              </div>
            </el-col>
          </template>
        </el-collapse-item>
      </template>
    </el-collapse>
    <el-row>
      <el-col :span="8" v-for="goods in goodsData" :key="goods.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="goods.picshow" class="image">
          <div style="padding: 14px;">
            <span>{{goods.name}}</span>
            <div class="bottom clearfix">
              <router-link :to="{path: '/user/goods/goods-single',query:{goodsData:goods}}">
                <img :src="goods.itempic" class="item-img-big" />
              </router-link>
              <span>{{goods.price}}</span>
              <el-button type="success" @click="addToCart(goods)" size="mini">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align:center">
      <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="pageInfo.page" :page-sizes="[10, 20, 50]"
        :page-size="pageInfo.size" layout="prev, pager, next" small :total="pageInfo.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  import start from '@/services/system/main-page/start';
  import hotsearch from '@/services/system/main-page/hotsearch';
  export default {
    name: 'goods-list',
    data() {
      return {
        formData: {
          name: '',
          typeid: 0
        },
        goodsData: this.$route.query.goodsData || '',
        pageInfo: {
          page: 1,
          pages: 1,
          size: 12,
          total: 1
        },
        datas: {
          columnData: [],
          hotData: []
        }
      }
    },
    methods: {
      onClear() {
        this.formData.typeid = 0;
      },
      fetchColumnData() {
        start.findAllAbove().then(json => {
          console.log(json);
          this.datas.columnData = json.data;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
        const params = {
          page: 1,
          size: 999
        }
        hotsearch.findall(params).then(json => {
          this.datas.hotData = json.data;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
        })
      },
      changeType(column) {
        this.formData.typeid = column.typeid;
      },
      fetchData() {
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size,
          name: this.formData.name || '',
          typeid: this.formData.typeid || 0
        }
        item.findbyname(params).then(json => {
          console.log(json);
          this.pageInfo.pages = json.pages;
          this.pageInfo.total = json.total;
          this.goodsData = json.data;
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
      },
      addToCart(goods) {
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
    created() {
      this.fetchColumnData();
    }
  }

</script>
