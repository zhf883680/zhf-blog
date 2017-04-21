<template>
	<el-row>
	  <el-col :span="24">
	 	<div class="title">
			<h2>this is a photo</h2>
	 	</div>
	  </el-col>
	</el-row>
</template>
<style scoped>
.title{
	display: -webkit-flex; /* Safari */
  	display: flex;
	justify-content:center;
	align-items: center;
	background-image: url(http://lorempixel.com/1920/200/);
	height: 200px;
}
</style>
