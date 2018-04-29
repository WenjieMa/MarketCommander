<template>
  <div class="itemtype-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="种类id">
        <el-input v-model="formData.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item label="种类名称">
        <el-input v-model="formData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.itemData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="种类名称">
              <el-input v-model="formData.name" placeholder="种类名称"></el-input>
            </el-form-item>
            <el-form-item label="操作">
              <el-button type="success">确认修改</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="种类 ID" prop="id">
      </el-table-column>
      <el-table-column label="种类名称" prop="name">
      </el-table-column>
      <el-table-column label="类下商品数量" prop="desc">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'itemtype-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          typeid: ''
        },
        datas: {
          itemData: [{
            id: '1',
            name: '测试商品',
            category: '种类1',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            stores: '1000',
            likes: '10',
            price: '10333'
          }, {
            id: '2',
            name: '测试商品',
            category: '种类1',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '1000',
            likes: '10',
            price: '10333'
          }, {
            id: '3',
            name: '测试商品',
            category: '种类1',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '1000',
            likes: '10',
            price: '10333'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }

</script>
