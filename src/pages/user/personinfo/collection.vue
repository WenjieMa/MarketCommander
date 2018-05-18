<template>
  <div class="collection">
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
          <el-button type="danger" round="" icon="el-icon-delete" circle size="mini" @click="deleteCollection($store.state.user.info.id,goods.id)"></el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import collection from '@/services/user/collection';
  export default {
    name: 'collection',
    data() {
      return {}
    },
    methods: {
      deleteCollection(userid, itemid) {
        const params = {
          userid: userid,
          itemid: itemid
        }
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
      }
    },
    computed: {
      goodsData() {
        return this.$route.query.goodsData;
      }
    }
  }

</script>
