<template>
  <section>
    <div class="g-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>诚信管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="企业">
        <enterprise-item />
      </el-tab-pane>
      <el-tab-pane label="公职人员">公职人员 container</el-tab-pane>
      <el-tab-pane label="重点人员">重点人员 container</el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
import EnterpriseItem from './components/enterprise-item.vue'
export default {
  components: {
    EnterpriseItem
  }
}
</script>
