<template>
  <div class="announcement-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="输入公告">
        <el-input v-model="formData.name" placeholder="输入公告"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.userData" style="width: 100%">
      <el-table-column label="公告 ID" prop="id">
      </el-table-column>
      <el-table-column label="公告" prop="name">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.iseffective == '0'">
            <el-button type="primary" @click="setEffective(scope.row.id)">
              设为公告
            </el-button>
          </template>
          <template v-if="scope.row.iseffective  == '1'">
            <el-button type="warning" @click="cancelEffective(scope.row.id)">
              取消公告
            </el-button>
          </template>
          <el-button type="danger" @click="cancelEffective(scope.row.id)">
              删除公告
            </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'announcement-list',
    data() {
      return {
        formData: {
          name: ''
        },
        datas: {
          userData: [{
            id: '1',
            name: '这是一条测试用公告',
            iseffective: '1'
          }, {
            id: '2',
            name: '这是一条测试用公告',
            iseffective: '0'
          }, {
            id: '3',
            name: '这是一条测试用公告',
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
