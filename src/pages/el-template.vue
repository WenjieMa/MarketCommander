<template>
  <div class="el-template">
    <div class="el-card">图标
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-info"></i>
      <i class="el-icon-error"></i>
      <i class="el-icon-success"></i>
      <i class="el-icon-warning"></i>
      <i class="el-icon-question"></i>
      <i class="el-icon-back"></i>
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-down"></i>
      <i class="el-icon-arrow-right"></i>
      <i class="el-icon-arrow-up"></i>
      <i class="el-icon-caret-left"></i>
      <i class="el-icon-caret-bottom"></i>
      <i class="el-icon-caret-top"></i>
      <i class="el-icon-caret-right"></i>
      <i class="el-icon-d-arrow-left"></i>
      <i class="el-icon-d-arrow-right"></i>
      <i class="el-icon-minus"></i>
      <i class="el-icon-plus"></i>
      <i class="el-icon-remove"></i>
      <i class="el-icon-circle-plus"></i>
      <i class="el-icon-remove-outline"></i>
      <i class="el-icon-circle-plus-outline"></i>
      <i class="el-icon-close"></i>
      <i class="el-icon-check"></i>
      <i class="el-icon-circle-close"></i>
      <i class="el-icon-circle-check"></i>
      <i class="el-icon-circle-close-outline"></i>
      <i class="el-icon-circle-check-outline"></i>
      <i class="el-icon-zoom-out"></i>
      <i class="el-icon-zoom-in"></i>
      <i class="el-icon-d-caret"></i>
      <i class="el-icon-sort"></i>
      <i class="el-icon-sort-down"></i>
      <i class="el-icon-sort-up"></i>
      <i class="el-icon-tickets"></i>
      <i class="el-icon-document"></i>
      <i class="el-icon-goods"></i>
      <i class="el-icon-sold-out"></i>
      <i class="el-icon-news"></i>
      <i class="el-icon-message"></i>
      <i class="el-icon-date"></i>
      <i class="el-icon-printer"></i>
      <i class="el-icon-time"></i>
      <i class="el-icon-bell"></i>
      <i class="el-icon-mobile-phone"></i>
      <i class="el-icon-service"></i>
      <i class="el-icon-view"></i>
      <i class="el-icon-menu"></i>
      <i class="el-icon-more"></i>
      <i class="el-icon-more-outline"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-off"></i>
      <i class="el-icon-location"></i>
      <i class="el-icon-location-outline"></i>
      <i class="el-icon-phone"></i>
      <i class="el-icon-phone-outline"></i>
      <i class="el-icon-picture"></i>
      <i class="el-icon-picture-outline"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-search"></i>
      <i class="el-icon-edit"></i>
      <i class="el-icon-edit-outline"></i>
      <i class="el-icon-rank"></i>
      <i class="el-icon-refresh"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-setting"></i>
      <i class="el-icon-upload"></i>
      <i class="el-icon-upload2"></i>
      <i class="el-icon-download"></i>
      <i class="el-icon-loading"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="el-card"> 按钮---禁用+disabled
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </el-row>
      <el-row>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
      </el-row>
    </div>
    <div class="el-card">单选
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
      多选
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
      单选组合
      <div>
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio6" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      带边框
      <div>
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio10" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="el-card">多选---加border带边框
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
      全选
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
      带数量限制
      <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
      组合多选
      <div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <div class="el-card">输入--- :disabled="true"禁用
      <el-input placeholder="请输入内容" clearable>
      </el-input>
      带图标
      <div class="demo-input-suffix">
        属性方式：
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date">
        </el-input>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
        </el-input>
      </div>
      <div class="demo-input-suffix">
        slot 方式：
        <el-input placeholder="请选择日期">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input placeholder="请输入内容">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      文本域
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" :rows="2" placeholder="请输入内容">
      </el-input>
      复合边框
      <div>
        <el-input placeholder="请输入内容" size="medium">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" size="large">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" class="input-with-select" size="mini">
          <el-select slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      匹配数据
      <el-row class="demo-autocomplete">
        <el-col :span="12">
          <div class="sub-title">激活即列出输入建议</div>
          <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">输入后匹配输入建议</div>
          <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false"
            @select="handleSelect"></el-autocomplete>
        </el-col>
      </el-row>
    </div>
    <div class="el-card">数字框
      <el-input-number :step="2" size="mini"></el-input-number>
    </div>
    <div class="el-card">select
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select v-model="value2" multiple filterable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      级联---show-all-levels设置为false只有最后一级
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader expand-trigger="hover" :options="jilianoptions" @change="handleChange">
      </el-cascader>
    </div>
    <div class="el-card">开关
      <el-switch v-model="kaiguan" active-text="按月付费" inactive-text="按年付费">
      </el-switch>
      <el-switch style="display: block" v-model="kaiguan" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
      </el-switch>
    </div>
    <div class="el-card">时间选择器
      <el-time-picker is-range v-model="timepick" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
      </el-time-picker>
      日期带快捷
      <span class="demonstration">带快捷选项</span>
      <el-date-picker type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
        :picker-options="pickerOptions2">
      </el-date-picker>
    </div>
    <div class="el-card">
      图片上传
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

    </div>
    <div class="el-card">评分
      <el-rate v-model="pingfen" disabled show-score text-color="#ff9900" score-template="{value}">
      </el-rate>
    </div>
    <div class="el-card">表单
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="el-card">表格
      <el-table :data="tableData5" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id">
        </el-table-column>
        <el-table-column label="商品名称" prop="name">
        </el-table-column>
        <el-table-column label="描述" prop="desc">
        </el-table-column>
      </el-table>

    </div>
    <div class="el-card">标签
      <el-tag>标签一</el-tag>
      <el-tag type="success" size='mini'>标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    <div class="el-card">手风琴tree
      <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
      </el-tree>

    </div>
    <div class="el-card">

    </div>
    <div class="el-card">分页
      <span class="demonstration">完整功能</span>
      <el-pagination background small @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <div class="el-card">
      btn右上数字（value必须为数字）
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </div>
    <div class="el-card">提示
      <el-button plain @click="open3">
        成功
      </el-button>
      <el-button plain @click="open4">
        警告
      </el-button>
      <el-button plain @click="open5">
        消息
      </el-button>
      <el-button plain @click="open6">
        错误
      </el-button>
    </div>
    <div class="el-card">删除提示
      <el-button type="text" @click="deleteinfo">点击打开 Message Box</el-button>
    </div>
    <div class="el-card">主要内容标签页
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-date"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class="el-card">面包屑
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="el-card">文字提示
      <div class="box">
        <div class="top">
          <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <el-button>上边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
            <el-button>上右</el-button>
          </el-tooltip>
        </div>
        <div class="left">
          <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <el-button>左上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
            <el-button>左边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
            <el-button>左下</el-button>
          </el-tooltip>
        </div>

        <div class="right">
          <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <el-button>右上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <el-button>右边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <el-button>右下</el-button>
          </el-tooltip>
        </div>
        <div class="bottom">
          <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <el-button>下左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <el-button>下边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <el-button>下右</el-button>
          </el-tooltip>
        </div>
      </div>

    </div>
    <div class="el-card">btn嵌套删除
      <el-popover ref="popover5" placement="top" width="160" v-model="visible2">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
        </div>
      </el-popover>
      <el-button v-popover:popover5>删除</el-button>
    </div>
    <div class="el-card">卡片
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">2018000000</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="el-card">走马灯
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

    </div>
    <div class="el-card">宣传面板
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="el-card">布局容器
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
    <div class="el-card"></div>
    <div class="el-card"></div>
    <div class="el-card"></div>
    <div class="el-card"></div>
    <div class="el-card"></div>
    <div class="el-card"></div>
  </div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: 'el-template',
    data() {
      return {
        activeName: '1',
        visible2: false,
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        pingfen: 3.7,
        radio: '选中且禁用',
        radio1: '选中且禁用',
        radio2: '选中且禁用',
        radio3: '选中且禁用',
        radio4: '选中且禁用',
        radio5: '选中且禁用',
        radio6: '选中且禁用',
        radio7: '选中且禁用',
        radio8: '选中且禁用',
        radio9: '选中且禁用',
        radio10: '选中且禁用',
        checkList: ['选中且禁用', '复选框 A'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        isIndeterminate: true,
        checkedCities1: ['上海', '北京'],
        cities: cityOptions,
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        restaurants: [],
        state1: '',
        state2: '',
        // 时间选择
        pickerOptions2: {
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
        timepick: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        // 结束
        jilianoptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value2: [],
        kaiguan: false,
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        imageUrl: '',
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        // 手风琴data
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        currentPage4: 4
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      // input输入建议
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [{
            'value': '三全鲜食（北新泾店）',
            'address': '长宁区新渔路144号'
          },
          {
            'value': '南拳妈妈龙虾盖浇饭',
            'address': '普陀区金沙江路1699号鑫乐惠美食广场A13'
          }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      // 级联选择
      handleChange(value) {
        console.log(value);
      },
      // 图片上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 手风琴
      handleNodeClick(data) {
        console.log(data);
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      // 弹窗
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      // 删除提示
      deleteinfo() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }

</script>

<style>
  .el-card {
    margin-bottom: 20px;
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  /* 图片上传css */

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  /* end */

  /* 表格css */

  .table-expand {
    font-size: 0;
  }

  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  /* end */

  /* 文字提示 */

  .box {
    width: 400px;
  }

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }

  /* 卡片css */

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  /* 卡片走马灯css */

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 普通走马灯css */

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
