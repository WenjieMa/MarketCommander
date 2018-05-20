<template>
  <div class="collection">
    <el-row>
      <el-col :span="8" v-for="goods in goodsData" :key="goods.id">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>{{goods.name}}</span>
            <div class="bottom clearfix">
              <img :src="goods.itempic" class="item-img-big" />
              <span>{{goods.price}}</span>
            </div>
          </div>
          <el-button type="danger" round="" icon="el-icon-delete" circle size="mini" @click="deleteCollection($store.state.user.info.id,goods.id)"></el-button>
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
  import collection from '@/services/user/collection';
  export default {
    name: 'collection',
    data() {
      return {
        pageInfo: {
          page: 1,
          pages: 1,
          size: 12,
          total: 1
        }
      }
    },
    methods: {
      deleteCollection(userid, itemid) {
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size,
          recordCollection: {
            userid: userid,
            itemid: itemid
          }
        }
        console.log('删除的商品Id' + itemid);
        collection.delete(params).then(json => {
          console.log(json);
          this.$router.push({
            path: '/user/personinfo/collection',
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
      fetchData() {
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size,
          recordCollection: {
            userid: this.$store.state.user.info.id
          }
        }
        collection.findall(params).then(json => {
          console.log(json);
          this.pageInfo.pages = json.pages;
          this.pageInfo.total = json.total;
          this.$router.push({
            path: '/user/personinfo/collection',
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
      changeSize(size) {
        this.pageInfo.size = size;
        this.fetchData();
      },
      changePage(page) {
        this.pageInfo.page = page;
        this.fetchData();
      }
    },
    computed: {
      goodsData() {
        return this.$route.query.goodsData;
      }
    }
  }

</script>
