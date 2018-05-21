<template>
  <div class="user-homepage">
    <div style="width:100%;height:40px;text-align:left;" class="searchDiv">
      <el-input v-model="formData.searchText" placeholder="请输入内容" style="width:85%;float:left">
      </el-input>
      <el-button slot="append" icon="el-icon-search" @click="onSubmit(formData.searchText, {typeid:0})" style="width:15%;float:left"></el-button>
    </div>
    <div style="text-align:left">
      <template v-for="hot in datas.hotData">
        <div :key="hot.id" @click="changeText(hot.name)" style="top:40px;float:left">
          <el-tag v-show="hot.iseffective">
            {{hot.name}}
          </el-tag>
        </div>
      </template>
      公告:
      <div v-for="ann in datas.annData" :key="ann.id">
        <el-alert :title="ann.text" type="success" :closable="false">
        </el-alert>
      </div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px" style="margin-top:25px;">
      <el-carousel-item v-for="image in datas.imageData" :key="image.id">
        <img :src="image.src" style="width:100%;height:100%" @click="pushRoute(image.link)" />
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
  import image from '@/services/system/main-page/image'
  import item from '@/services/system/item';
  import start from '@/services/system/main-page/start';
  import hotsearch from '@/services/system/main-page/hotsearch';
  import ann from '@/services/system/main-page/anounce';
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
          hotData: [],
          annData: []
        },
        goodsData: []
      }
    },
    methods: {
      changeText(text) {
        this.formData.searchText = text;
      },
      pushRoute(link) {
        this.$router.push({
          path: '/user/goods/goods-single',
          query: {
            goodsData: {
              id: link
            }
          }
        });
      },
      fetchData() {
        const params = {
          page: 1,
          size: 30
        }
        item.findall(params).then(json => {
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
          size: 10,
          id: 0
        }
        if (text != null) {
          params.name = text
        } else {
          params.name = ''
        }
        if (typeObj != null) {
          params.typeid = typeObj.typeid
        } else {
          params.typeid = 0
        }
        console.log(params);
        console.log('主页搜索商品');
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
        const annParams = {
          page: 1,
          size: 999
        }
        image.findall(annParams).then(json => {
          console.log('公告' + JSON.stringify(json.data));
          this.datas.imageData = json.data;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
        ann.findall(annParams).then(json => {
          console.log('公告' + JSON.stringify(json.data));
          this.datas.annData = json.data;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
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
