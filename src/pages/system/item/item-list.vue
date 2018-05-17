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
          <el-option v-for="itemtype in datas.typeData" :label="itemtype.typename" :value="itemtype.id" :key="itemtype.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <router-link :to="{path:'/system/item/edit', query:{}}">
          <el-button type="success">新增商品</el-button>
        </router-link>
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
              <span>{{ props.row.typeid }}</span>
            </el-form-item>
            <el-form-item label="存货量">
              <span>{{ props.row.store }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="操作">
              <router-link :to="{path:'/system/item/edit', query:{itemId: props.row.id ,itemData: props.row}}">
                <el-button type="primary">编辑</el-button>
              </router-link>
              <router-link :to="{path:'/system/item/import', query:{itemId: props.row.id ,itemData: props.row}}">
                <el-button type="success">进货</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="description">
      </el-table-column>
      <el-table-column label="当前状态">
        <template slot-scope="scope">
          <span v-if="scope.row.iseffective">使用中
            <el-button type="danger" @click="changeEffective(scope.row)" size="mini">冻结</el-button>
          </span>
          <span v-if="!scope.row.iseffective">已冻结
            <el-button type="success" @click="changeEffective(scope.row)" size="mini">恢复</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <pager v-if="pageInfo" :currentPage="pageInfo.page" :total="pageInfo.total" :pagesize="pageInfo.size"></pager>
  </div>
</template>
<script>
  import item from '@/services/system/item';
  import itemtype from '@/services/system/itemtype';
  export default {
    name: 'item-list',
    data() {
      return {
        formData: {
          name: '',
          id: '',
          typeid: ''
        },
        pageInfo: {
          page: 1,
          pages: 1,
          size: 10,
          total: 1
        },
        datas: {
          itemData: [{
            id: '1',
            name: '测试商品',
            typeid: '种类1',
            description: '荷兰优质淡奶，奶香浓而不腻',
            store: '1000',
            likes: '10',
            price: '10333',
            iseffective: '1'
          }],
          typeData: []
        }
      }
    },
    methods: {
      changeEffective(itemVo) {
        const params = itemVo;
        item.changeeff(params).then(json => {
          console.log(json);
          this.fetchData();
          this.$message({
            showClose: true,
            message: '修改成功！',
            type: 'success'
          });
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
        })
      },
      fetchTypeData() {
        const params = {
          page: 1,
          size: 999999
        }
        itemtype.findall(params).then(json => {
          console.log(json);
          this.datas.typeData = json.data;
        }).catch(err => {
          console.log(err);
          this.$message({
            showClose: true,
            message: '系统出错！',
            type: 'error'
          });
          this.$loading = false;
        })
      },
      fetchData() {
        this.$loading = true;
        const params = {
          name: this.formData.name,
          id: this.formData.id,
          typeid: this.formData.typeid,
          page: this.pageInfo.page,
          size: this.pageInfo.size
        }
        if (params.name && params.id && params.typeid) {
          item.findbyname(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.itemData = json.data;
            this.pageInfo.pages = json.pages;
            this.pageInfo.total = json.total;
          }).catch(err => {
            console.log(err);
            this.$message({
              showClose: true,
              message: '系统出错！',
              type: 'error'
            });
            this.$loading = false;
          })
        } else {
          item.findall(params).then(json => {
            console.log(json);
            this.$loading = false;
            this.datas.itemData = json.data;
            this.pageInfo.pages = json.pages;
            this.pageInfo.total = json.total;
            console.log('total' + this.pageInfo.total + 'pages' + this.pageInfo.pages);
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
      },
      onSubmit() {
        this.fetchData();
      },
      changeSize(size) {
        this.pageInfo.size = size;
        this.fetchData();
      },
      changePage(page) {
        this.pageInfo.page = page;
        this.fetchData();
      }
    },
    created() {
      this.fetchData();
    }
  }

</script>
