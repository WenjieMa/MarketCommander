<template>
  <div class="role-edit">
    <h1>权限{{roleData.roleName}}(id:{{roleData.roleId}})的权力范围编辑</h1>
    <el-tree :data="roleTree" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
    </el-tree>
    <el-button type="primary" @click="onSubmit">确认</el-button>
    <router-link :to="{path:'/system/operator/role/role-list'}">
      <el-button type="success">返回</el-button>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'role-edit',
    data() {
      return {
        roleData: this.$route.query.roleData || {
          roleId: '1',
          roleName: '测试权限'
        },
        roleTree: [{
          id: 1,
          label: '商品中心',
          children: [{
            id: 4,
            label: '一级 1-1'
          }, {
            id: 4,
            label: '一级 1-2'
          }, {
            id: 4,
            label: '一级 1-3'
          }]
        }, {
          id: 2,
          label: '订单中心',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 2,
          label: '沟通中心',
          children: [{
            id: 5,
            label: '二级 3-1'
          }, {
            id: 6,
            label: '二级 3-2'
          }]
        }, {
          id: 2,
          label: '用户信息',
          children: [{
            id: 5,
            label: '二级 4-1'
          }, {
            id: 6,
            label: '二级 4-2'
          }]
        }, {
          id: 2,
          label: '营销',
          children: [{
            id: 5,
            label: '二级 5-1'
          }, {
            id: 6,
            label: '二级 5-2'
          }]
        }, {
          id: 2,
          label: '系统',
          children: [{
            id: 5,
            label: '二级 6-1'
          }, {
            id: 6,
            label: '二级 6-2'
          }]
        }, {
          id: 2,
          label: '超级管理员',
          disabled: true,
          children: [{
            id: 5,
            label: '二级 7-1',
            disabled: true
          }, {
            id: 6,
            label: '二级 7-2',
            disabled: true
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      onSubmit() {

      }
    }
  }

</script>
