<template>
  <div class="chat-detail">
    <el-table :data="datas.chatData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column label="发送方">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/assistant/user-detail', query:{data: scope.row}}" v-if="!scope.row.isassistantsend">
            <img :src="scope.row.headpic" />用户：{{scope.row.usernick}}
          </router-link>
          <template v-if="scope.row.isassistantsend">管理员:{{scope.row.usernick}}</template>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="chattime">
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          {{scope.row.text}}
        </template>
      </el-table-column>
    </el-table>
    <el-form :inline="true" :model="formData" class="demo-form-inline" style="margin-top:25px">
      <el-form-item>
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" v-model="formData.text" placeholder="回复内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSend">发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'chat-detail',
    data() {
      return {
        formData: {
          assistantid: this.getAssistantid,
          userid: this.$route.query.userid || -1,
          text: ''
        },
        datas: {
          chatData: [{
            userid: '1',
            usernick: '测试用户名',
            headpic: '测试用户',
            isassistantsend: false,
            chattime: '2018-04-15 15:05:55',
            text: '测试聊天内容'
          }, {
            userid: '1',
            usernick: '测试用户名',
            headpic: '测试用户',
            isassistantsend: true,
            chattime: '2018-04-15 15:05:55',
            text: '测试聊天内容'
          }, {
            userid: '1',
            usernick: '测试用户名',
            headpic: '测试用户',
            isassistantsend: false,
            chattime: '2018-04-15 15:05:55',
            text: '测试聊天内容'
          }, {
            userid: '1',
            usernick: '测试用户名',
            headpic: '测试用户',
            isassistantsend: true,
            chattime: '2018-04-15 15:05:55',
            text: '测试聊天内容'
          }, {
            userid: '1',
            usernick: '测试用户名',
            headpic: '测试用户',
            isassistantsend: true,
            chattime: '2018-04-15 15:05:55',
            text: '测试聊天内容'
          }]
        }
      }
    },
    computed: {
      getAssistantid() {
        return this.utils.user.info.userid;
      }
    },
    methods: {
      tableRowClassName({
        row,
        rowIndex
      }) {
        console.log(row);
        if (row.isassistantsend === true) {
          return 'success-row';
        }
        return '';
      },
      onSend() {
        console.log(`我向id为${this.formData.userid}发送了聊天记录${this.formData.text}`);
      }
    }
  }

</script>
