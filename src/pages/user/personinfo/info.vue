<template>
  <div class="info">
    欢迎您:{{$store.state.user.info.nickname}}
    <div>
      <el-col :span="6">
        <el-button type="warning" @click="collectionBtn()">收藏
          <i class="el-icon-star-off"></i>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="danger" @click="collectionBtn()">订单
          <i class="el-icon-tickets"></i>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="infoBtn()">个人
          <i class="el-icon-setting"></i>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="success" @click="collectionBtn()">消息
          <i class="el-icon-message"></i>
        </el-button>
      </el-col>
    </div>
  </div>
</template>
<script>
  import collection from '@/services/user/collection';
  import user from '@/services/user/user';

  export default {
    name: 'info',
    data() {
      return {
        data: {}
      }
    },
    methods: {
      infoBtn() {
        user.findbyname({
          id: this.$store.state.user.info.id,
          page: 1,
          size: 1
        }).then(json => {
          console.log(json);
          this.$router.push({
            path: '/user/info-update',
            query: {
              userData: json.data[0]
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
      collectionBtn() {
        const params = {
          userid: this.$store.state.user.info.id
        }
        collection.findall(params).then(json => {
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
    }
  }

</script>
