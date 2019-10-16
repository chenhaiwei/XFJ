<template>
  <section>
    <div class="g-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>知识库管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs tab-position="left">
      <el-tab-pane label="农村农业">农村农业</el-tab-pane>
      <el-tab-pane label="城乡建设">城乡建设</el-tab-pane>
      <el-tab-pane label="劳动和社会保障">劳动和社会保障</el-tab-pane>
      <el-tab-pane label="卫生计生">卫生计生</el-tab-pane>
      <el-tab-pane label="教育文体">教育文体</el-tab-pane>
      <el-tab-pane label="民政">民政</el-tab-pane>
      <el-tab-pane label="政法">政法</el-tab-pane>
      <el-tab-pane label="经济管理">经济管理</el-tab-pane>
      <el-tab-pane label="交通运输">交通运输</el-tab-pane>
      <el-tab-pane label="商贸旅游">商贸旅游</el-tab-pane>
      <el-tab-pane label="科技与信息产业">科技与信息产业</el-tab-pane>
      <el-tab-pane label="环境保护">环境保护</el-tab-pane>
      <el-tab-pane label="党务政务">党务政务</el-tab-pane>
      <el-tab-pane label="组织人事">组织人事</el-tab-pane>
      <el-tab-pane label="纪检监察">纪检监察</el-tab-pane>
      <el-tab-pane label="其他">其他</el-tab-pane>
    </el-tabs>
  </section>
</template>
