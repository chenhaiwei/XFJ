<template>
  <el-container class="container">
    <el-header class="header">
      <h1>Title</h1>
    </el-header>
    <el-container class="layout">
      <el-aside class="g-scrollbar" width="200px">
        <x-menu></x-menu>
      </el-aside>
      <el-main class="g-scrollbar">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import XMenu from '@/components/x-menu'
export default {
  components: {
    XMenu
  }
}
</script>
<style lang="less">
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.header {
  background: #20a0ff;
}
.layout {
  position: absolute;
  top: 60px;
  bottom: 0;
  width: 100%;
}
</style>
