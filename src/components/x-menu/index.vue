<template>
  <el-menu class="x-menu" :unique-opened="true" :router="true" :default-active="$route.path" background-color="#f6f6f6">
    <template v-for="(item, i) in menus">
      <el-submenu :index="item.icon" class="submenu" :key="i"
        v-if="item.children && item.children.length">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item v-for="(subitem, j) in item.children" :key="j" :index="subitem.path">{{subitem.text}}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="item.path" :key="i" v-if="!item.children">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { menus } from './menu.js'
export default {
  data () {
    return {
      menus
    }
  }
}
</script>
<style lang="less">
.x-menu {
  min-height: 100%;
  .submenu {
    .el-menu--inline .el-menu-item{
      background: #e6e6e6 !important;
    }
  }
}
</style>
