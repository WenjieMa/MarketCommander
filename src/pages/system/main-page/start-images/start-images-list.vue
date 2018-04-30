<template>
  <div class="start-images-list">
    <router-link :to="{path:'/system/main-page/start-images-edit'}">
      <el-button type="success">新增图片</el-button>
    </router-link>
    <el-table :data="datas.imgData" style="width: 100%">
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.src" />
        </template>
      </el-table-column>
      <el-table-column label="链接" prop="link">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="onDelete(scope.row.id)" size="mini">
            <i class="el-icon-delete"></i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'start-images-list',
    data() {
      return {
        datas: {
          imgData: [{
            id: '1',
            src: '测试图片',
            link: 'http://www.baidu.com'
          }, {
            id: '2',
            src: '测试图片',
            link: 'http://www.baidu.com'
          }, {
            id: '3',
            src: '测试图片',
            link: 'http://www.baidu.com'
          }]
        }
      }
    },
    methods: {
      onDelete(ef) {

      }
    }
  }

</script>
