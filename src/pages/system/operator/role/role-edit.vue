<template>
  <div class="role-edit">
    <h1>权限{{roleData.name}}(id:{{roleData.id}})的权力范围编辑</h1>
    <el-tree ref="tree" highlight-current :data="rolecodes" show-checkbox default-expand-all node-key="id" :props="defaultProps"
      :default-checked-keys="strToArray(roleData.rolecode)">
    </el-tree>
    <el-button type="primary" @click="onSubmit">确认</el-button>
    <router-link :to="{path:'/system/operator/role/role-list'}">
      <el-button type="success">返回</el-button>
    </router-link>
  </div>
</template>
<script>
  import role from '@/services/system/role'
  export default {
    name: 'role-edit',
    data() {
      return {
        roleData: this.$route.query.roleData || {
          id: '1',
          name: '测试权限'
        },
        formData: '',
        rolecodes: [{
          id: 1,
          label: '商品中心'
        }, {
          id: 2,
          label: '订单中心'
        }, {
          id: 3,
          label: '沟通中心'
        }, {
          id: 4,
          label: '用户信息中心'
        }, {
          id: 5,
          label: '营销中心'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      onSubmit() {
        const nodes = this.$refs.tree.getCheckedNodes();
        var rolestr = '';
        nodes.forEach(element => {
          rolestr = rolestr + '-' + element.id;
        });
        rolestr = rolestr.substring(1);
        this.roleData.rolecode = rolestr;
        const params = {
          id: this.roleData.id,
          name: this.roleData.name,
          rolecode: this.roleData.rolecode
        };
        role.update(params).then(json => {
          console.log(json);
          this.$message({
            showClose: true,
            message: '更新成功！',
            type: 'success'
          });
          this.$loading = false;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
      }
    }
  }

</script>
