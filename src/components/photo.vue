<template>
    <div id="app">
        <!-- photoswipe样式设置 -->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
        <el-row>
            <el-col :span="3" v-for="(item, index) in items" :key="item" :offset="2">
                <el-card :body-style="{ padding: '0px' }">
                    <img class="image" src="../assets/loading-2.gif" alt="图片" v-lazy="item.Path" @click="show(index)" :width="item.Width" :Height="item.Height">
                    <div style="padding: 14px;">
                        <span>{{item.Description}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ item.AddTime }}</time>
                            <el-button type="text" class="button" @click="download">下载</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PhotoSwipe from "../../static/PhotoSwipe/photoswipe.min.js"
import PhotoSwipeUI_Default from "../../static/PhotoSwipe/photoswipe-ui-default.min.js"
import "../../static/PhotoSwipe/photoswipe.css"
import "../../static/PhotoSwipe/default-skin/default-skin.css"
import axios from "axios"
export default {
    name: 'app',
    data() {
        return {
            items: new Array
        }
    },
    mounted() {
        //服务器使用
        // axios.post("/Home/GetPhoto").then((data)=>{
        //      this.items= data.data;
        // })
        //本地测试使用
        let item = {
            Path: "../../static/img/1.jpg",
            Width: 500,
            Height: 500
        }
        let i = 0;
        do {
            this.items.push(item);
            i++;
        }
        while (i < 15);
    },
    methods: {
        show(index) {
            //新js
            let items = new Array; //图片集合
            let item; //单个图片
            let options = { //设置 http://photoswipe.com/documentation/options.html
                index: index,
                history: false //url不变
            };
            let allImg = document.getElementsByTagName("img"); //获取页面中所有图片
            for (let img of allImg) {
                //找到同样列表下的图片
                if (img.attributes[6] == undefined) {
                    continue;
                }
                //将图片信息放入列表中
                if (img.attributes[6].nodeValue == "loaded") {
                    //将所有图片的值放入
                    item = {
                        src: img.attributes[1].nodeValue,
                        w: img.attributes[3].nodeValue,
                        h: img.attributes[4].nodeValue
                    };
                    //将图片信息增加
                    items.push(item);
                }
            }
            //初始化photoswipe控件
            let gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], PhotoSwipeUI_Default, items, options);
            gallery.init();
        },
        //获取图片宽度 --改为上传时,获取宽度 此方法不再调用
        getImageWidth(url, callback) {
            let img = new Image();
            img.src = url;
            // 如果图片被缓存，则直接返回缓存数据
            if (img.complete) {
                callback(img.width, img.height);
            } else {
                // 完全加载完毕的事件
                img.onload = function() {
                    callback(img.width, img.height);
                }
            }
        },
        download(url) {
            //下载功能
        }
    }
}
</script>
<style scoped>
.photoList {
    display: -webkit-flex;
    /* Safari */
    display: flex;
    justify-content: center;
    align-items: center;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    margin-top: 5px;
    float: right;
}

.image {
    width: 100%;
    height: 200px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
