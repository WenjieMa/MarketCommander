<template>
  <div class="comment-detail">
    <h1>商品{{datas.itemData.itemname}}(id:{{datas.itemData.itemid}})的评论内容</h1>
    <el-table :data="datas.commentData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="评论内容">
              {{props.row.text}}
            </el-form-item>
            <el-form-item>
            </el-form-item>
            <el-form-item label="回复内容">
              <el-input v-model="formData.text" placeholder="回复内容" v-if="!props.row.isreplied"></el-input>
              <template v-if="props.row.isreplied"> {{props.row.replytext}}</template>
            </el-form-item>
            <el-form-item label="操作" v-if="!props.row.isreplied">
              <el-button type="success" @click="onReply(props.row.commentid)">确认回复</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="发送方">
        <template slot-scope="scope">
          <router-link :to="{path:'/system/assistant/user-detail', query:{data: scope.row}}">
            <img :src="scope.row.headpic" />用户：{{scope.row.usernick}}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="commenttime">
      </el-table-column>
      <el-table-column label="等级">
        <template slot-scope="scope">
          <template v-if="scope.row.itemstar >= 4">
            <span class="success-text">好</span>
          </template>
          <template v-if="scope.row.itemstar >= 3 && scope.row.itemstar < 4">
            <span class="warning-text">中</span>
          </template>
          <template v-if="scope.row.itemstar < 3">
            <span class="danger-text">差</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="星级" style="float:left">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.itemstar" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
        </template>
      </el-table-column>

      <el-table-column label="当前状态">
        <template slot-scope="scope">
          <template v-if="!scope.row.isreplied">
            未回复
          </template>
          <template v-if="scope.row.isreplied">
            已回复
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'comment-detail',
    data() {
      return {
        formData: {
          commentid: '',
          text: ''
        },
        datas: {
          itemData: this.$route.query.itemData || {
            itemid: '1',
            itemname: '测试商品'
          },
          commentData: [{
              userid: '1',
              usernick: '测试用户名',
              commentid: '1',
              itemstar: '2',
              commenttime: '2018-04-15 15:05:55',
              text: '测试聊天内容',
              isreplied: false,
              replytext: ''
            },
            {
              userid: '1',
              usernick: '测试用户名',
              commentid: '1',
              itemstar: '3',
              commenttime: '2018-04-15 15:05:55',
              text: '测试聊天内容',
              isreplied: true,
              replytext: '666'
            },
            {
              userid: '1',
              usernick: '测试用户名',
              commentid: '1',
              itemstar: '4',
              commenttime: '2018-04-15 15:05:55',
              text: '测试聊天内容',
              isreplied: false,
              replytext: ''
            },
            {
              userid: '1',
              usernick: '测试用户名',
              commentid: '1',
              itemstar: '5',
              commenttime: '2018-04-15 15:05:55',
              text: '测试聊天内容',
              isreplied: true,
              replytext: '666'
            }
          ]
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
        if (row.itemstar >= 4) {
          return 'success-row';
        } else if (row.itemstar >= 3 && row.itemstar < 4) {
          return 'warning-row';
        } else if (row.itemstar < 3) {
          return 'danger-row';
        }
      },
      onSend() {
        console.log(`我向id为${this.formData.userid}发送了聊天记录${this.formData.text}`);
      }
    }
  }

</script>
