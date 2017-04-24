<template>
 <div class="content">
	<el-col :span="12" :offset="11"><h2>{{item.Title}}</h2></el-col>
	<el-row>
		  <el-col :span="12" :offset="12"><p>{{item.AddTime}}</p></el-col>
	</el-row>
	<el-col :span="18" :offset="6">{{item.Content}}</el-col>
 </div>	
</template>
<script>
export default{
	data(){
		return{item:JSON.parse('{"Title":"这是文章标题","AddTime":"2017-4-24 21:00","Content":"这是内容,有很多很多"}')};}
}
</script>

<style>
.content{
/*	display: -webkit-flex; 
  	display: flex;
	justify-content:center;
	align-items: center;*/
}
</style>