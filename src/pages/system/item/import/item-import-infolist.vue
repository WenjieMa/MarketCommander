<template>
  <div class="item">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="formData.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="formData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="是否确认">
        <el-select v-model="formData.ischecked" placeholder="是否确认">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
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
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="进货价格">
              <span>{{ props.row.imprice }}</span>
            </el-form-item>
            <el-form-item label="进货量">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="供货商">
              <span>{{ props.row.supplier }}</span>
            </el-form-item>
            <el-form-item label="总价">
              <span>{{ props.row.sumprice }}</span>
            </el-form-item>
            <el-form-item label="是否确认">
              <span>{{ props.row.ischecked }}</span>
            </el-form-item>
            <el-form-item label="进货时间">
              <span>{{ props.row.imdate }}</span>
            </el-form-item>
            <el-form-item label="操作">
              <el-button type="primary" @click="onSubmit()">确认进货</el-button>
              <el-button type="danger" @click="onReject()">退回进货单</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="进货时间" prop="imdate">
      </el-table-column>
      <el-table-column label="供货商" prop="supplier">
      </el-table-column>
      <el-table-column label="是否确认" prop="ischecked">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'item',
    data() {
      return {
        datePickParam: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        formData: {
          name: '',
          id: '',
          ischecked: '',
          imdate: ''
        },
        datas: {
          importData: [{
            name: '测试数据',
            id: '测试数据',
            imprice: '测试数据',
            category: '测试数据',
            supplier: '测试数据',
            sumprice: '测试数据',
            ischecked: '测试数据',
            imdate: '测试数据'
          }, {
            name: '测试数据',
            id: '测试数据',
            imprice: '测试数据',
            category: '测试数据',
            supplier: '测试数据',
            sumprice: '测试数据',
            ischecked: '测试数据',
            imdate: '测试数据'
          }, {
            name: '测试数据',
            id: '测试数据',
            imprice: '测试数据',
            category: '测试数据',
            supplier: '测试数据',
            sumprice: '测试数据',
            ischecked: '测试数据',
            imdate: '测试数据'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      },
      onReject() {

      }
    }
  }

</script>
