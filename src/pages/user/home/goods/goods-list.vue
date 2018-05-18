<template>
  <div class="goods-list">
    <el-input placeholder="请输入内容" v-model="formData.name" class="input-with-select" style="width:100%">
      <el-button slot="append" icon="el-icon-search" @click="onSubmit()"></el-button>
    </el-input>
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
              <span>{{goods.price}}</span>
              <el-button type="text" class="button">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align:center">
      <el-pagination  @size-change="changeSize" @current-change="changePage" :current-page="pageInfo.page" :page-sizes="[10, 20, 50]"
        :page-size="pageInfo.size" layout="prev, pager, next" small :total="pageInfo.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  import start from '@/services/system/main-page/start';
  export default {
    name: 'goods-list',
    data() {
      return {
        formData: {
          name: '',
          typeid: 0
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          columnData: []
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
          this.$router.push({
            path: '/user/goods/list',
            query: {
              goodsData: json.data,
              lastFormData: this.formData
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
      }
    },
    created() {
      this.fetchColumnData();
    },
    computed: {
      goodsData() {
        return this.$route.query.goodsData || '';
      }
    }
  }

</script>
