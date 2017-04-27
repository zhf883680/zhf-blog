<template>
	<div id="app">
		<toolbar></toolbar>
		 <el-col :span="24"><navbar></navbar></el-col>
		 <el-col :span="24"><router-view></router-view></el-col>
 <el-col :span="12" :offset="8"><footInfo></footInfo></el-col>
	</div>
</template>

<script>
import toolbar from './components/Toolbar.vue'
import navbar from './components/navbar.vue'
import footInfo from './components/footInfo.vue'
  export default {
   components:{
    toolbar,
    navbar,
    footInfo
   }
  }
</script>
<style>
*{margin:0;padding:0;}

</style>

