 <template>
  <div class="content">
   {{$route.params.id}}
	<div v-for="item in items" >
	<router-link :to="{ name: 'article', params: { id: item.no }}">
	<!-- <router-link :to="/path/item.no"> -->
		<el-row>
		  <el-col :span="18" :offset="6"><h2>title</h2></el-col>
		</el-row>
		<el-row>
		  <el-col :span="18" :offset="6">时间:2017-4-24 阅读量:{{item.no}} 回复量:88</el-col>
		</el-row>
	</router-link>
	</div>
  </div>
 </template>
 <script>
export default{
	data(){
		return {items:JSON.parse('[{"no":1},{"no":2},{"no":3},{"no":4},{"no":5}]')};
	},
	methods:{
		
	},
	mounted() {
		//alert(this.$route.params.id);
	},
	watch: {
	  '$route' (to, from) {
	  	//参数变化
	  	console.log(this._data.items);
	  	if(this.$route.params.id==1){
			this._data.items=JSON.parse('[{"no":1}]');
		}
		else if(this.$route.params.id==2){
			this._data.items=JSON.parse('[{"no":1},{"no":2},{"no":3}]');
		}
		else{
			this._data.items=JSON.parse('[{"no":1},{"no":2},{"no":3},{"no":4},{"no":5}]');
		}
	  }
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