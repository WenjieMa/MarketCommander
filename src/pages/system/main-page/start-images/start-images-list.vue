<template>
  <div class="start-images-list">
    <router-link :to="{path:'/system/main-page/start-images-edit', query:{imageData:{id:-1,src:'',link:''}}}">
      <el-button type="success">新增图片</el-button>
    </router-link>
    <el-table :data="datas.imageData" style="width: 100%">
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.src" class="item-img-big-cart" />
        </template>
      </el-table-column>
      <el-table-column label="链接商品id" prop="link">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/main-page/start-images-edit', query:{imageData:scope.row}}">
            <el-button type="success" size="mini">编辑</el-button>
          </router-link>
          <el-button type="danger" @click="deleteData(scope.row.id)" size="mini">
            <i class="el-icon-delete"></i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import image from '@/services/system/main-page/image'
  export default {
    name: 'start-images-list',
    data() {
      return {
        datas: {
          imageData: []
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        }
      }
    },
    methods: {
      deleteData(id) {
        const params = {
          id: id + ''
        }
        image.delete(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '删除成功！',
            type: 'success'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
        })
      },
      fetchData() {
        this.$loading = true;
        const params = {
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        image.findall(params).then(json => {
          console.log(json);
          this.$loading = false;
          this.datas.imageData = json.data;
          this.pageInfo.pages = json.pages;
          this.pageInfo.total = json.total;
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
        this.insertData();
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
      this.fetchData();
    }
  }

</script>
