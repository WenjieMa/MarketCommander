<template>
  <div class="item-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="formData.id" placeholder="商品id"></el-input>
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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.itemData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="喜欢数">
              <span>{{ props.row.likes }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="价格">
              <span>{{ props.row.price }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="存货量">
              <span>{{ props.row.stores }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="上下架操作">
              <el-switch :content="'当前状态:' " v-model="props.row.iseffective" active-color="#13ce66" inactive-color="#ff4949" :change="changeEffective(`${props.row.iseffective}`)">
              </el-switch>
            </el-form-item>

            <el-form-item label="操作">
              <router-link :to="{path:'/system/item/edit', query:{itemId: props.row.id ,itemData: props.row}}">
                <el-button type="primary">编辑</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="desc">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'item-list',
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
            price: '10333',
            iseffective: '1'
          }, {
            id: '2',
            name: '测试商品',
            category: '种类1',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '1000',
            likes: '10',
            price: '10333',
            iseffective: '1'
          }, {
            id: '3',
            name: '测试商品',
            category: '种类1',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '1000',
            likes: '10',
            price: '10333',
            iseffective: '1'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      },
      changeEffective(ef) {

      }
    }
  }

</script>
