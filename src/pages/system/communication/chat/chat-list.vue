<template>
  <div class="chat-list">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="用户id">
        <el-input v-model="formData.id" placeholder="用户id"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="formData.name" placeholder="用户名称"></el-input>
      </el-form-item>
      <el-form-item label="用户最后回复时间">
        {{formData.createdate}}
        <el-date-picker v-model="formData.createdate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :picker-options="datePickParam">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datas.chatData" style="width: 100%">
      <el-table-column label="用户 ID" prop="userid">
      </el-table-column>
      <el-table-column label="用户名称" prop="username">
      </el-table-column>
      <el-table-column label="最后回复时间" prop="lastchattime">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-badge :is-dot="scope.row.hasnew">
            <router-link :to="{path:'/system/communication/chat-detail', query:{userid:scope.row.userid, assistantid:utils.user.info.userid}}">
              <el-button size="mini">查看留言</el-button>
            </router-link>
          </el-badge>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'chat-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          createdate: ''
        },
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
        datas: {
          chatData: [{
            userid: '1',
            username: '测试用户',
            lastchattime: '2018-04-15',
            hasnew: true
          }, {
            userid: '1',
            username: '测试用户',
            lastchattime: '2018-04-15',
            hasnew: true
          }, {
            userid: '1',
            username: '测试用户',
            lastchattime: '2018-04-15',
            hasnew: true
          }, {
            userid: '1',
            username: '测试用户',
            lastchattime: '2018-04-15',
            hasnew: true
          }, {
            userid: '1',
            username: '测试用户',
            lastchattime: '2018-04-15',
            hasnew: true
          }]
        }
      }
    },
    methods: {
      onSubmit() {

      },
      toChat(userid, assistantid) {

      }
    }
  }

</script>
