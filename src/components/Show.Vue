<template>
    <div id="show">
        <div class="body">
            <el-row>
                <el-col :span="18" :offset="3">
                    <div v-for="item in items">
                        <router-link :to="{ name: 'article', params: { id: item.No }}">
                            <div class="list">
                                <p class="date">{{getDateMonth(item.AddTime)}}<b>{{getDateDay(item.AddTime)}}</b></p>
                                <h2><a href="javascript:">{{item.Title}}</a></h2>
                                <p class="meta">编辑：<a href="javascript:">zhf</a> | 阅读量:<a href="javascript:">{{item.ViewCount}}</a> | 暂无回复 &raquo;</p>
                                <p v-html="setLength(item.Content)"></p>
                            </div>
                        </router-link>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-pagination @current-change="changePage" layout="prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
            return {
                items: new Array,
                total: 100
            };
        },
        methods: {
            //页面改变时,触发事件
            //val:改变后的页面
            changePage(val) {
                this.getData(val);
            },
            getData(pageIndex) {
                //页面打开时,获取值
                //let $this_data=this._data;
                //传递页数与文章所属模块

                axios.post("/Article/GetArticle", "pageIndex=" + pageIndex + "&type=" + this.$route.params.id).then(data => {
                    this.items = data.data.rows;
                    this.total = data.data.total;
                })
            },
            changeTime(date) {
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
                let datetime = date.getFullYear() + "-" // "年"
                    + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + "-" // "月"
                    + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate()) + " " + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
                return datetime;
            },
            getDateMonth(date) {
                date = date.substr(1, date.length - 2);
                let obj = eval('(' + "{Date: new " + date + "}" + ')');
                date = obj["Date"];
                return (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : (date.getMonth() + 1);
            },
            getDateDay(date) {
                date = date.substr(1, date.length - 2);
                let obj = eval('(' + "{Date: new " + date + "}" + ')');
                date = obj["Date"];
                return date.getDate();
            },
            setLength(content) {
                return content.length < 60 ? content : content.substr(0, 60) + "...";
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
<style scoped>
a {
    color: black;
}

.content {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
}

#show {
    display: flex;
    flex-direction: column;
    /*background-color: #eee;*/
    min-height: 70vh;
}

.body {
    flex-grow: 1;
    background-color: #eee;
    overflow: hidden;
}

.title {
    font-size: 1.9em;
}

.otherInfo {
    padding-top: 1em;
    font-size: 1em;
}

* {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #666;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
}

a {
    color: #514f42;
    text-decoration: none;
}

a:hover {
    color: #669900;
}

.list {
    padding: 0 0 0 0;
    margin: 5px 0 20px 0;
    border-bottom: 1px dashed #666633;
}

.list .date {
    float: left;
    width: 76px;
    height: 58px;
    margin: 0 20px 0 0;
    padding: 2px 0 0;
    background: #514F42;
    text-transform: uppercase;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
}

.list b {
    display: block;
    font-size: 40px;
    color: #FFF;
    line-height: 40px;
}

.list .meta {
    margin: 0 0 25px 0;
    color: #979680;
}

.list h2 a {
    font-size: 1.8em;
}

.list p {
    display: block;
    line-height: 18px;
}
</style>
