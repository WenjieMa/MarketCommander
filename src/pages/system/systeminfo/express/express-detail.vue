<template>
  <div class="express-detail">
    <el-form :model="expressData" label-position="right" label-suffix="" label-width="150px">
      <el-col span="12">
        <el-form-item label="快递公司id">
          {{expressData.id}}
        </el-form-item>
        <el-form-item label="快递公司">
          {{expressData.expressname}}
        </el-form-item>
        <el-form-item label="当前状态">
          {{expressData.iseffective}}
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="公司接入点地址">
          {{expressData.adress}}
        </el-form-item>
        <el-form-item label="联系人姓名">
          {{expressData.contactname}}
        </el-form-item>
        <el-form-item label="联系人电话">
          {{expressData.phone}}
        </el-form-item>
        <el-form-item label="操作">
          <router-link :to="{path:'/system/systeminfo/express/express-edit', query:{expressId: expressData.id ,expressData: expressData}}">
            <el-button type="primary">编辑</el-button>
          </router-link>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'express-detail',
    data() {
      return {
        expressid: this.$route.query.id || -1,
        expressData: {
          id: '测试数据',
          expressname: '测试数据',
          iseffective: '测试数据',
          phone: '测试数据',
          adress: '',
          contectname: '测试数据'
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
