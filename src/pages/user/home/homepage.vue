<template>
  <div class="user-homepage">
    <div style="width:100%;height:60px;" class="searchDiv">
      <el-select v-model="formData.searchText" filterable placeholder="请输入内容" style="width:85%;float:left">
        <template v-for="hot in datas.hotData">
          <el-option v-show="hot.iseffective" :label="hot.name" :value="hot.name" :key="hot.id">
          </el-option>
        </template>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="onSubmit(formData.searchText, '')" style="width:15%;float:left"></el-button>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-collapse v-model="formData.type" accordion>
      <template v-for="value in datas.columnData">
        <el-collapse-item :title="value.name" :name="value.id" :key="value.id">
          <template v-for="column in value.h2s">
            <el-col :span="6" :key="column.id">
              <div @click="onSubmit('',column)">
                <el-card>{{column.text}}</el-card>
              </div>
            </el-col>
          </template>
        </el-collapse-item>
      </template>
    </el-collapse>
    <el-row>
      <el-col :span="8" v-for="goods in goodsData" :key="goods.id">
        <router-link :to="{path: '/user/goods/goods-single',query:{goodsData:goods}}">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="goods.picshow" class="image">
            <div style="padding: 14px;">
              <span>{{goods.name}}</span>
              <div class="ta-center bottom clearfix">
                <img :src="goods.itempic" class="item-img-big" />
                <span>{{goods.price}}</span>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  import start from '@/services/system/main-page/start';
  import hotsearch from '@/services/system/main-page/hotsearch';

  export default {
    name: 'user-homepage',
    data() {
      return {
        formData: {
          searchText: '',
          type: ''
        },
        datas: {
          columnData: [],
          hotData: []
        },
        goodsData: []
      }
    },
    methods: {
      fetchData() {
        const params = {
          page: 1,
          size: 30
        }
        item.findbyname(params).then(json => {
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
      onSubmit(text, typeObj) {
        const params = {
          page: 1,
          size: 10
        }
        if (text != null) {
          params.name = text
        }
        if (typeObj != null) {
          params.typeid = typeObj.typeid
        }
        item.findbyname(params).then(json => {
          console.log(json);
          this.$router.push({
            path: '/user/goods/list',
            query: {
              goodsData: json.data
            }
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
      handleSelect(key, keyPath) {
        this.$store.state.activeIndex = key;
        this.$router.push({
          path: key
        });
      },
      fetchColumnData() {
        start.findAllAbove().then(json => {
          console.log('栏目数据' + JSON.stringify(json.data));
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
      }
    },
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    created() {
      this.fetchColumnData();
      this.fetchData();
    }
  }

</script>
