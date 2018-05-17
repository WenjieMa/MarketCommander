<template>
  <div class="item-edit">
    <el-form :model="itemData" label-position="right" label-width="150px">
      <el-form-item label="商品id" v-if="itemData.id">
        {{itemData.id}}
      </el-form-item>
      <el-form-item label="商品名称">
        {{itemData.name}}
      </el-form-item>
      <el-form-item label="供货商名">
        <el-input v-model="importData.supplier" placeholder="供货商名"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="importData.imprice" placeholder="单价"></el-input>
      </el-form-item>
      <el-form-item label="进货数量">
        <el-input v-model="importData.amount" placeholder="进货数量"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <router-link :to="{path:'/system/item/list'}">
          <el-button type="primary">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  export default {
    name: 'item-edit',
    data() {
      return {
        itemData: this.$route.query.itemData,
        importData: {
          itemid: '',
          store: '',
          supplier: '',
          amount: '',
          imprice: ''
        }
      }
    },
    methods: {
      onSubmit() {
        const params = {
          infoItem: this.itemData,
          recordImport: {
            itemid: this.itemData.id,
            supplier: this.importData.supplier,
            amount: this.importData.amount,
            imprice: this.importData.imprice
          }
        }
        item.import(params).then(json => {
          console.log(json);
          this.$message({
            showClose: true,
            message: '进货成功！',
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
      }
    }
  }

</script>
