<template>
  <div class="order-detail">
    <el-form :model="formData" label-position="right" label-suffix="" label-width="150px">
      <el-col span="12">
        <el-form-item label="订单id">
          {{formData.id}}
        </el-form-item>
        <el-form-item label="订单名称">
          {{formData.name}}
        </el-form-item>
        <el-form-item label="订单种类">
          {{formData.type}}
        </el-form-item>
        <el-form-item label="总价">
          {{formData.sumprice}}
        </el-form-item>
        <el-form-item label="购买账号">
          {{formData.user.username}}
        </el-form-item>
        <el-form-item label="收货人名字">
          {{formData.user.name}}
        </el-form-item>
        <el-form-item label="购买者手机号">
          {{formData.user.phone}}
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="快递号">
          {{formData.deliveryid}}
        </el-form-item>
        <el-form-item label="快递公司">
          {{formData.express.name}}
        </el-form-item>
        <el-form-item label="当前状态"> {{formData.state}}
        </el-form-item>
        <el-form-item label="收货地址">
          {{formData.adress}}
        </el-form-item>
        <el-form-item label="服务评分">
          {{formData.star}}
        </el-form-item>
        <el-form-item label="单内商品">
          <span v-for="item in formData.items" :key="item.id">
            <img :src="item.pic" />{{item.name}}X {{item.quantity}} 价格：{{item.price}}</span>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'order-detail',
    data() {
      return {
        orderid: this.$route.query.id || -1,
        formData: {
          id: '测试数据',
          name: '测试数据',
          type: '测试数据',
          sumprice: '测试数据',
          deliveryid: '测试数据',
          user: {
            id: '',
            username: '',
            name: '',
            phone: ''
          },
          express: {
            id: '',
            name: ''
          },
          items: [{
            state: '',
            adress: '',
            star: ''
          }]
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
