<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">前端</template>
      <!-- <el-menu-item index="{name:'showList',params: { id: 1 }}">js</el-menu-item> -->
        <el-menu-item index="/show/1">js</el-menu-item>
      <el-menu-item index="/show/2">css</el-menu-item>
      <el-menu-item index="/show/3">github</el-menu-item>
      <el-menu-item index="/show/4">node.js</el-menu-item>
    </el-submenu>
    <el-submenu index="3"> 
      <template slot="title">后端</template>
      <el-menu-item index="/show/5">c#</el-menu-item>
      <el-menu-item index="/show/6">php</el-menu-item>
      </el-submenu>
       <el-submenu index="4"> 
      <template slot="title">娱乐</template>
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
