<template>
  <div class="item">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="formData.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item label="进货时间">
        {{formData.imdate}}
        <el-date-picker v-model="formData.imdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.importData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="商品 ID">
              <span>{{ props.row.itemid }}</span>
            </el-form-item>
            <el-form-item label="进货价格">
              <span>{{ props.row.imprice }}</span>
            </el-form-item>
            <el-form-item label="进货量">
              <span>{{ props.row.amount }}</span>
            </el-form-item>
            <el-form-item label="供货商">
              <span>{{ props.row.supplier }}</span>
            </el-form-item>
            <el-form-item label="总价">
              <span>{{ props.row.amount * props.row.imprice }}</span>
            </el-form-item>
            <el-form-item label="进货时间">
              <span>{{ props.row.createdate }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="itemid">
      </el-table-column>
      <el-table-column label="进货时间" prop="createdate">
      </el-table-column>
      <el-table-column label="供货商" prop="supplier">
      </el-table-column>
      <el-table-column label="进货量" prop="amount">
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  export default {
    name: 'item',
    data() {
      return {
        formData: {
          id: '',
          imdate: ''
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          importData: []
        }
      }
    },
    methods: {
      fetchData() {
        this.$loading = true;
        const params = {
          id: this.formData.id,
          imdate: this.formData.imdate,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        if (params.id && params.imdate) {
          item.findimportyname(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.importData = json.data;
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
        } else {
          item.findallimport(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.importData = json.data;
            this.pageInfo.pages = json.pages;
            this.pageInfo.total = json.total;
            console.log('total' + this.pageInfo.total + 'pages' + this.pageInfo.pages);
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
      this.fetchData();
    }
  }

</script>
