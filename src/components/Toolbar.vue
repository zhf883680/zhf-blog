<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">c#</template>
      <el-menu-item index="2-1">插件使用</el-menu-item>
      <el-menu-item index="2-2">自己使用</el-menu-item>
    </el-submenu>
    <el-submenu index="3"> 
      <template slot="title">前端技巧</template>
      <el-menu-item index="3-1">插件</el-menu-item>
      <el-menu-item index="3-2">自创</el-menu-item>
      </el-submenu>
       <el-submenu index="4"> 
      <template slot="title">生活娱乐</template>
      <el-menu-item index="/photo">图片</el-menu-item>
      <el-menu-item index="4-2">娱乐</el-menu-item>
      </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
