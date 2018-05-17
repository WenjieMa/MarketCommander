<template>
  <div class="itemtype-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="种类名称">
        <el-input v-model="formData.typename" placeholder="商品种类名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import itemtype from '@/services/system/itemtype';
  export default {
    name: 'itemtype-list',
    data() {
      return {
        formData: {
          typename: ''
        }
      }
    },
    methods: {
      onSubmit() {
        itemtype.insert(this.formData).then(json => {
          console.log(json);
          this.$router.push({
            name: 'item-itemtype'
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
