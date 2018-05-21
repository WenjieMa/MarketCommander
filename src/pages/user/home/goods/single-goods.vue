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
        <div>喜欢数:{{goodsData.likes}}</div>
        <div>介绍:{{goodsData.description}}</div>
        <div>标签:
          <el-tag type="success">{{goodsData.textsmall}}</el-tag>
        </div>
        <div>详细介绍:{{goodsData.textbig}}</div>
        <el-button round :type="isCollected?'danger':'success'" @click="addCollection(isCollected)">{{isCollected==true?'已收藏':'未收藏'}}
          <i class="el-icon-star-off"></i>
        </el-button>
        <el-button type="primary" @click="addToCart(goodsData)">加入购物车</el-button>
        <div>评价:</div>
        <template v-for="comment in commentData.commentReplyVos">
          <div :key="comment.recordComment.id">
            <el-rate v-model="comment.orderSmall.itemstar" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
            时间:{{comment.recordComment.createdate}}
            <img :src="comment.infoUser.headpic" class="item-img-big-cart" />用户{{comment.infoUser.nickname}}说:
            <div>{{comment.recordComment.comment}}</div>
            <div v-show="comment.recordComment.replyid !== -1">
              官方回复:{{comment.recordCommentReply.text}}
            </div>
          </div>
        </template>
        <div style="text-align:center">
          <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="pageInfo.page" :page-sizes="[10, 20, 50]"
            :page-size="pageInfo.size" layout="prev, pager, next" small :total="pageInfo.total">
          </el-pagination>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import collection from '@/services/user/collection';
  import comment from '@/services/user/comment';
  import item from '@/services/system/item';
  export default {
    name: 'single-goods',
    data() {
      return {
        isCollected: false,
        pageInfo: {
          page: 1,
          pages: 1,
          size: 12,
          total: 1
        },
        goodsData: {
          name: ''
        },
        commentData: []
      }
    },
    methods: {
      addCollection(isCollected) {
        const params = {
          itemid: this.goodsData.id,
          userid: this.$store.state.user.info.id
        }
        console.log(params);
        console.log('正在删除');
        if (isCollected) {
          collection.deletefromitem(params).then(json => {
            this.fetchData();
            this.$message({
              showClose: true,
              message: '已删除收藏!',
              type: 'success'
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
        } else {
          collection.insert(params).then(json => {
            this.$message({
              showClose: true,
              message: '已加入收藏！',
              type: 'success'
            });
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
        this.fetchData();
      },
      fetchData() {
        const params = {
          page: 1,
          size: 1,
          id: this.getGoodsData.id || this.$route.query.goodsData.id,
          name: '',
          typeid: 0
        }
        item.findbyname(params).then(json => {
          console.log(json);
          console.log('加载商品数据');
          this.goodsData = json.data[0];

          const params = {
            itemid: this.goodsData.id,
            userid: this.$store.state.user.info.id
          }
          console.log(params)
          collection.findbyuseridanditemid(params).then(json => {
            if (json.data) {
              this.isCollected = true;
            } else {
              this.isCollected = false;
            }
            const params = {
              id: this.goodsData.id,
              page: this.pageInfo.page,
              size: this.pageInfo.size
            }
            console.log(params)
            comment.findcommentbyitemid(params).then(json => {
              this.commentData = json.data
              console.log(json);
            }).catch(err => {
              console.log(err);
              this.$message({
                showClose: true,
                message: '系统出错！',
                type: 'error'
              });
              this.$loading = false;
            })
          }).catch(err => {
            console.log(err);
            this.$message({
              showClose: true,
              message: '系统出错！',
              type: 'error'
            });
            this.$loading = false;
          })
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
      },
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
      getGoodsData() {
        return this.$route.query.goodsData;
      }
    },
    created() {
      this.fetchData();
    }
  }

</script>
