<template>
  <div class="item-edit">
    <el-form :model="formData" label-position="right" label-width="150px">
      <el-form-item label="商品id">
        {{formData.id}}
      </el-form-item>
      <el-form-item label="商品图片">
        <img class="item-img-big" :src="formData.pic">
      </el-form-item>
      <el-form-item label="商品小图">
        <img class="item-img-big" :src="formData.picsmall">
      </el-form-item>
      <el-form-item label="商品介绍页面图片">
        <img class="item-img-big" :src="formData.picbig">
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="formData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品种类">
        <el-select v-model="formData.typeid" placeholder="商品种类">
          <el-option label="好吃的" value="1"></el-option>
          <el-option label="好玩的" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="formData.price" placeholder="价格"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}"  v-model="formData.description" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item label="商品小描述">
         <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}"  v-model="formData.textsmall" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item class="el-textarea" label="商品介绍页面描述">
         <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 10}"  v-model="formData.textbig" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item label="打折系数">
        <el-input v-model="formData.discount" placeholder="打折系数"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <router-link :to="{path:'/system/item/list'}">
          <el-button type="primary">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'item-edit',
    data() {
      return {
        itemid: this.$route.query.id || -1,
        formData: {
          name: '',
          id: '',
          typeid: '',
          price: '',
          description: '',
          pic: '',
          picsmall: '',
          picbig: '',
          textsmall: '',
          textbig: ''
        }
      }
    },
    methods: {
      fetchData(id = '-1') {
        if (id > 0) {

        }
      },
      onSubmit() {

      }
    },
    created() {
      this.fetchData(this.itemid);
    }

  }

</script>
