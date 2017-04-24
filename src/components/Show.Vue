 <template>
  <div class="content">
	<div v-for="item in items">
		<el-row>
		  <el-col :span="18" :offset="6"><h2>title</h2></el-col>
		</el-row>
		<el-row>
		  <el-col :span="18" :offset="6">时间:2017-4-24 阅读量:55 回复量:88</el-col>
		</el-row>
	</div>
  </div>
 </template>
 <script>
export default{
	data(){
		let arr=[1,2,3,4,5];
		return {items:arr}
		}
	}
 </script>

<style type="text/css">
.content{
	/*display: -webkit-flex; */
  	/*display: flex;*/
	/*justify-content:center;*/
	/*align-items: center;*/
}
</style>