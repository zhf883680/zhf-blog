<template>
	<div id="app">
		<toolbar></toolbar>
		<navbar></navbar>
		<router-view></router-view>
		<footInfo></footInfo>
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

