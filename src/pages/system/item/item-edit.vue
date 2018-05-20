<template>
  <div class="item-edit">
    <el-form :model="itemData" label-position="right" label-width="150px">
      <el-form-item label="商品id" v-if="itemData.id">
        {{itemData.id}}
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload class="userimage-uploader" :action="'http://localhost:8080/file/itempic?itemid='+itemData.id" :show-file-list="false"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="itemData.itempic" :src="itemData.itempic" class="item-img-big">
          <i v-else class="el-icon-plus userimage-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="itemData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品种类">
        <el-select v-model="itemData.typeid" placeholder="商品种类">
          <el-option v-for="itemtype in datas.typeData" :label="itemtype.typename" :value="itemtype.id" :key="itemtype.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="itemData.price" placeholder="价格"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" v-model="itemData.description" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item label="商品小描述">
        <el-input class="el-textarea" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" v-model="itemData.textsmall" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item class="el-textarea" label="商品介绍页面描述">
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 10}" v-model="itemData.textbig" placeholder="商品描述"></el-input>
      </el-form-item>
      <el-form-item label="打折系数">
        <el-input v-model="itemData.discount" placeholder="打折系数"></el-input>
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
  import itemtype from '@/services/system/itemtype';
  export default {
    name: 'item-edit',
    data() {
      return {
        itemid: this.$route.query.id || -1,
        itemData: this.$route.query.itemData || {
          name: '',
          id: '',
          typeid: '',
          price: '',
          description: '',
          itempic: '',
          textsmall: '',
          textbig: '',
          discount: ''
        },
        datas: {
          typeData: []
        }
      }
    },
    methods: {
      onSubmit() {
        const params = this.itemData;
        if (params.id > 0) {
          item.update(params).then(json => {
            console.log(json);
            this.$message({
              showClose: true,
              message: '修改成功！',
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
          item.insert(params).then(json => {
            console.log(json);
            this.$message({
              showClose: true,
              message: '新增成功！',
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
      },
      handleAvatarSuccess(res, file) {
        console.log(res);
        this.itemData.itempic = res.data.url;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    created() {
      const params = {
        page: 1,
        size: 999999
      }
      itemtype.findall(params).then(json => {
        console.log(json);
        this.datas.typeData = json.data;
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

</script>
