<template>
  <div class="dialog-wrap itempool_wrap" v-if="visible">
    <div class="dialog-mask"></div>
    <div class="dialog">
      <div class="dialog_header">
        {{title}}
        <a class="dialog_close" @click="onClose">
          <i class="iconfont icon-close"></i>
        </a>
      </div>
      <div class="dialog_body"></div>
      <div class="toolbar">
        <div class="toolbar_right">
          <el-button class="primary" @click="sure()">确定</el-button>
          <el-button class="primary" @click="onClose()">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
     props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      toRoute: {
        type: String,
        default: '',
        required: false
      }
    },
    data() {
      return {
        visible: true
      };
    },
    created() {},
    methods: {
      onClose() {
        this.visible = false;
      },
      sure() {
        this.$router.push({name: this.toRoute});
      }
    }
  };

</script>
