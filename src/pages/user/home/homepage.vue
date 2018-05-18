<template>
  <div class="user-homepage">
    <el-input placeholder="请输入内容" v-model="formData.searchText" class="input-with-select" style="width:100%">
      <el-button slot="append" icon="el-icon-search" @click="onSubmit(formData.searchText, '')"></el-button>
    </el-input>
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
        <el-card :body-style="{ padding: '0px' }">
          <img :src="goods.picshow" class="image">
          <div style="padding: 14px;">
            <span>{{goods.name}}</span>
            <div class="bottom clearfix">
              <span>{{goods.price}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  import start from '@/services/system/main-page/start';
  export default {
    name: 'user-homepage',
    data() {
      return {
        formData: {
          searchText: '',
          type: ''
        },
        datas: {
          columnData: []
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
