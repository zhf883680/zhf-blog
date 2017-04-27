<template>
  <div id="app">
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
      <div class="photoList" v-for="item in items">
            <img src="../assets/loading-2.gif" alt="图片" v-lazy="item.Path" @click="show">
        </div> 
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
  data(){
    return {items:null}
},
  mounted() {
             let $this = this;
             axios.post("/Home/GetPhoto").then(function (data) {
                $this.items = data.data;
            })
  },
  methods:{
    show(clickElem){
        let Imgs = new Array;
        let imgSibling = clickElem.target.parentNode.parentNode.children;
        for (let img of imgSibling) {
            if (img.children[0].tagName === "IMG") {
                Imgs.push(img.children[0]);
            }
        }
        //设置索引
         let items = new Array;//图片集合
         let item;//单个图片
         let options = {//设置 http://photoswipe.com/documentation/options.html
            index: 0
        };
        let imgIndex=0;
        for (let img of Imgs) {
          imgIndex++;
            item = {
                src: img.attributes[0].nodeValue,
                w: 300,
                h: 300
            };
            //获取图片大小
            this.getImageWidth(item.src, function (w, h) {
                item.w = w;
                item.h = h;
            });
            //将图片信息增加
            items.push(item);
            //设置索引
            if (img.attributes[0].nodeValue == clickElem.target.attributes[0].nodeValue) {
                options.index = imgIndex;
            }
        }
        //初始化
        let gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], PhotoSwipeUI_Default, items, options);
        gallery.init();
    },
    getImageWidth(url, callback) {
        let img = new Image();
        img.src = url;
        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            callback(img.width, img.height);
        } else {
            // 完全加载完毕的事件
            img.onload = function () {
                callback(img.width, img.height);
            }
        }
    }
  }
}
</script>

<style>
.photoList
{
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:center;
  align-items: center;
}</style>
