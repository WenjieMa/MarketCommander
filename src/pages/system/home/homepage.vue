<template>
  <div class="homepage">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="时间段">
        {{formData.createdate}}
        <el-date-picker v-model="formData.createdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="cardbox">
      <div class="card">
        <p class="card_number">{{ data.xdrs }}</p>
        <p class="card_text">下单人数</p>
      </div>
      <div class="card">
        <p class="card_number">{{ data.xdbs }}</p>
        <p class="card_text">下单笔数</p>
      </div>
      <div class="card">
        <p class="card_number">{{ toPrice(data.xdje) }}</p>
        <p class="card_text">下单金额</p>
      </div>
      <div class="card">
        <p class="card_number">{{ toPrice(data.kdj) }}</p>
        <p class="card_text">客单价</p>
      </div>
    </div>
    <div class="cardbox">
      <div class="card">
        <p class="card_number">{{ data.fkrs }}</p>
        <p class="card_text">付款人数</p>
      </div>
      <div class="card">
        <p class="card_number">{{ data.fkbs }}</p>
        <p class="card_text">付款笔数</p>
      </div>
      <div class="card">
        <p class="card_number">{{ toPrice(data.fkje) }}</p>
        <p class="card_text">付款金额</p>
      </div>
      <div class="card">
        <p class="card_number">{{ data.spxl }}</p>
        <p class="card_text">商品销量</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'homepage',
    data() {
      return {
        formData: {
          orderid: '',
          itemid: '',
          issended: '',
          createdate: ''
        },
        data: {
          xdrs: '0',
          xdbs: '0',
          xdje: '0',
          kdj: '0',
          fkrs: '0',
          fkbs: '0',
          fkje: '0',
          spxl: '0'
        }
      }
    },
    methods: {
      fetchData() {

      },
      onSubmit() {

      }
    },
    created() {
      this.fetchData();
    }
  }

</script>
