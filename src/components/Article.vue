<template>
 <div>
 <el-row type="flex" justify="center">
	<h2>{{item.Title}}</h2>
	</el-row>
	<el-row type="flex" justify="center">
		  <p>{{changeTime(item.AddTime)}}</p>
	</el-row>
	<el-row type="flex" justify="start">
		<el-col :offset="6" v-html="item.Content"> 
		</el-col>
	</el-row>
 </div>	
</template>
<script>
import axios from "axios"
export default{
	data(){
		return{item:new Array};
	},
       mounted() {
		axios.post("http://localhost:5707/Article/GetArticleInfo","id="+this.$route.params.id).then((data)=>{this.item = data.data})
		},
	methods:{
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
	watch: {
	  '$route' (to, from) {
	  	//页面传递参数变化时,触发此方法
	  	//获取文章内容,并且增加阅读次数
		axios.post("/Article/GetArticleInfo","id="+this.$route.params.id).then((data)=>{this.item = data.data})
	  }
	}
}
</script>

<style>

</style>