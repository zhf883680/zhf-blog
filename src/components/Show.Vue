 <template>
  <div>
   {{$route.params.id}}
	<div v-for="item in items" >
	<router-link :to="{ name: 'article', params: { id: item.No }}">
	<!-- <router-link :to="/path/item.no"> -->
		<el-row>
		  <el-col :span="18" :offset="6"><h2>{{item.Title}}</h2></el-col>
		</el-row>
		<el-row>
		  <el-col :span="18" :offset="6">时间:{{item.AddTime}} 阅读量:{{item.ViewCount}}</el-col>
		</el-row>
	</router-link>
	</div>
	<div class="content">
	  <el-pagination
	  @current-change="changePage"
   		 layout="prev, pager, next"
   		 :total="total">
  	  </el-pagination>
  	  </div>
  </div>
 </template>
 <script>
 import axios from "axios"
export default{
	data(){
		return {items:JSON.parse('[{"no":1},{"no":2},{"no":3},{"no":4},{"no":5}]'),total:100};
	},
	methods:{
		//页面改变时,触发事件
		//val:改变后的页面
		changePage(val){
			this.getData(val);
		},
		getData(pageIndex){
			//页面打开时,获取值
		//let $this_data=this._data;
			//传递页数与文章所属模块
		axios.post("http://localhost:5707/Article/GetArticle","pageIndex="+pageIndex+"&type="+this.$route.params.id).then(data=>{
			this.items = data.data.rows;
			this.total=data.data.total*10;
		})
		}
	},
	mounted() {
		this.getData(1);
	},
	watch: {
	  '$route' (to, from) {
	  	//页面传递参数变化时,触发此方法
		this.getData(1);
	  }
	}
}
 </script>

<style type="text/css">
.content{
	display: -webkit-flex; 
  	display: flex;
	justify-content:center;
	align-items: center;
}
</style>