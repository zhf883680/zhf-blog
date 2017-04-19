<template>
	<div id="app">
		<el-row class="tac">
			<toolbar></toolbar>
			 <router-view></router-view>
		</el-row>
	</div>
</template>

<script>
import toolbar from './components/Toolbar.vue'
  export default {
   components:{
    toolbar
   }
  }
</script>


