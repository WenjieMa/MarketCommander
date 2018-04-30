<template>
  <div class="hot-search">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="输入热门词">
        <el-input v-model="formData.name" placeholder="输入热门词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="搜索词 ID" prop="id">
      </el-table-column>
      <el-table-column label="搜索词" prop="name">
      </el-table-column>
      <el-table-column label="次数" prop="amoumt">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.iseffective == '0'">
            <el-button type="primary" @click="setEffective(scope.row.id)">
              设为热词
            </el-button>
          </template>
          <template v-if="scope.row.iseffective  == '1'">
            <el-button type="warning" @click="cancelEffective(scope.row.id)">
              取消热词
            </el-button>
          </template>
          <el-button type="danger" @click="cancelEffective(scope.row.id)">
              删除热词
            </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'hot-search',
    data() {
      return {
        formData: {
          name: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '1'
          }, {
            id: '2',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '0'
          }, {
            id: '3',
            name: '测试搜索词',
            amount: '1000',
            iseffective: '1'
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      },
      setEffective(ef) {

      },
      cancelEffective(ef) {

      }
    }
  }

</script>
