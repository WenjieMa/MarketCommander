<template>
  <div class="pager" style="text-align:center">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50]"
      :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'pager',
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pagesize: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 10
      }
    },
    methods: {
      handleSizeChange(val) {
         this.$parent.changeSize(val);
      },
      handleCurrentChange(val) {
        this.$parent.changePage(val);
      }
    }
  };

</script>
