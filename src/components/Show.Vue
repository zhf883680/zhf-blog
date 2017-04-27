 <template>
	<div id="show">
		<div class="body">
		<el-row>
		<el-col :span="18" :offset="3">
			<div v-for="item in items" >
			<router-link :to="{ name: 'article', params: { id: item.No }}">
			<el-row>
					<el-col :span="12">
					<span class="title">
					  {{item.Title}}
					  </span>
					</el-col>
					  <el-col :span="12" class="otherInfo">
					  <span>
					  时间:{{changeTime(item.AddTime)}} 阅读量:{{item.ViewCount}}
					  </span>
					  </el-col>
					  <el-col v-html="item.Content"></el-col>
					  </el-row>
					  <hr>
				</router-link>
		</div>
			</el-col>
			
		</el-row>
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
		return {items:new Array,total:100};
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
				this.total=	data.data.total;
			})
		},
		changeTime(date){
		if (date == undefined) {
            return "";
        }
        /*json格式时间转js时间格式*/
        date = date.substr(1, date.length - 2);
        let obj = eval('(' + "{Date: new " + date + "}" + ')');
         date = obj["Date"];
        if (date.getFullYear() < 1900) {
            return "";
        }
        let datetime = date.getFullYear()
                + "-"// "年"
                + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0"
                        + (date.getMonth() + 1))
                + "-"// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + " "
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ":"
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ":"
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
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
a{
	color: black;
}
.content{
	display: -webkit-flex; 
  	display: flex;
	justify-content:center;
	align-items: center;
}
#show{
    display:flex;
  flex-direction:column;
	/*background-color: #eee;*/
  min-height:70vh;
}
.body{
  flex-grow:1;
  background-color: #eee;
}
.title{
	font-size: 1.9em;
}
.otherInfo{
	padding-top: 1em;
	font-size: 1em;
}
</style>