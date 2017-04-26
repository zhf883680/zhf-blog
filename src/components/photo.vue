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
   // return {hello:"asdwq"}
    // return {items:JSON.parse('[{"No":1,"Path":"../../static/img/1.jpeg"},{"No":2,"Path":"../../static/img/1.jpg"},{"No":3,"Path":"../../static/img/1.png"},{"No":4,"Path":"../../static/img/10.jpg"},{"No":5,"Path":"../../static/img/10.PNG"},{"No":6,"Path":"../../static/img/11.jpg"},{"No":7,"Path":"../../static/img/12.jpg"},{"No":8,"Path":"../../static/img/12.png"},{"No":9,"Path":"../../static/img/13.jpg"},{"No":10,"Path":"../../static/img/13.png"},{"No":11,"Path":"../../static/img/14.jpg"},{"No":12,"Path":"../../static/img/14.png"},{"No":13,"Path":"../../static/img/15.jpg"},{"No":14,"Path":"../../static/img/15.png"},{"No":15,"Path":"../../static/img/16.jpg"},{"No":16,"Path":"../../static/img/16.png"},{"No":17,"Path":"../../static/img/17.jpg"},{"No":18,"Path":"../../static/img/17.png"},{"No":19,"Path":"../../static/img/18.jpg"},{"No":20,"Path":"../../static/img/18.png"},{"No":21,"Path":"../../static/img/19.jpg"},{"No":22,"Path":"../../static/img/19.png"},{"No":23,"Path":"../../static/img/2.jpg"},{"No":24,"Path":"../../static/img/2.png"},{"No":25,"Path":"../../static/img/20.jpg"},{"No":26,"Path":"../../static/img/20.png"},{"No":27,"Path":"../../static/img/21.jpg"},{"No":28,"Path":"../../static/img/21.png"},{"No":29,"Path":"../../static/img/22.jpg"},{"No":30,"Path":"../../static/img/22.png"},{"No":31,"Path":"../../static/img/23.jpg"},{"No":32,"Path":"../../static/img/23.png"},{"No":33,"Path":"../../static/img/24.jpg"},{"No":34,"Path":"../../static/img/24.png"},{"No":35,"Path":"../../static/img/25.jpg"},{"No":36,"Path":"../../static/img/25.png"},{"No":37,"Path":"../../static/img/26.jpg"},{"No":38,"Path":"../../static/img/26.png"},{"No":39,"Path":"../../static/img/27.jpg"},{"No":40,"Path":"../../static/img/27.png"},{"No":41,"Path":"../../static/img/28.jpg"},{"No":42,"Path":"../../static/img/28.png"},{"No":43,"Path":"../../static/img/29.jpg"},{"No":44,"Path":"../../static/img/29.png"},{"No":45,"Path":"../../static/img/3.jpeg"},{"No":46,"Path":"../../static/img/3.jpg"},{"No":47,"Path":"../../static/img/3.PNG"},{"No":48,"Path":"../../static/img/30.jpg"},{"No":49,"Path":"../../static/img/30.png"},{"No":50,"Path":"../../static/img/31.jpg"},{"No":51,"Path":"../../static/img/31.png"}]')}
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
