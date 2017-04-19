<template>
  <el-col :xs="4" :sm="4" :md="4" :lg="4">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
      <template slot="title">前端</template>
          <el-menu-item index="1-1">js</el-menu-item>
           <el-menu-item index="1-2">css</el-menu-item>
      </el-submenu>
        <el-submenu index="2">
      <template slot="title">c#</template>
          <el-menu-item index="2-1">插件</el-menu-item>
           <el-menu-item index="2-2">自用</el-menu-item>
      </el-submenu>
      <router-link to="/photo" tag="el-menu-item" v-bind:index="3">闲聊</router-link>
    </el-menu>
  </el-col>

</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>