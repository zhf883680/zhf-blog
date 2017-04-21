//将点击事件绑定到链接 / 缩略图。
//用户点击缩略图后，找到其索引。
//从DOM元素创建一个数组的幻灯片对象 - 循环遍历所有链接并检索href属性（大图像url），data - size属性（其大小），src缩略图和标题内容。
//格式:<img src=''><img src=''><img src=''> 
var photoSwipeInit = {
    action: function (clickElem) {//js对象
        var Imgs = new Array;
        var imgSibling = clickElem.parentNode.childNodes;
        for (var i = 0; i < imgSibling.length; i++) {
            if (imgSibling[i].tagName == "IMG") {
                Imgs.push(imgSibling[i]);
            }
        }
        //设置索引
        var items = new Array;//图片集合
        var item;//单个图片
        var options = {//设置 http://photoswipe.com/documentation/options.html
            index: 0
        };
        for (var i = 0; i < Imgs.length; i++) {
            item = {
                src: Imgs[i].attributes[0].nodeValue,
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
            if (Imgs[i].attributes[0].nodeValue == clickElem.attributes[0].nodeValue) {
                options.index = i;
            }
        }
        //初始化
        var gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], PhotoSwipeUI_Default, items, options);
        gallery.init();
    },
    getImageWidth: function (url, callback) {
        var img = new Image();
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
    },
    example: function () {
        document.write('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\
               <div class="pswp__bg"></div>\
               <div class="pswp__scroll-wrap">\
                   <div class="pswp__container">\
                       <div class="pswp__item"></div>\
                       <div class="pswp__item"></div>\
                       <div class="pswp__item"></div>\
                   </div>\
                   <div class="pswp__ui pswp__ui--hidden">\
                       <div class="pswp__top-bar">\
                           <div class="pswp__counter"></div>\
                           <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\
                           <div class="pswp__preloader">\
                               <div class="pswp__preloader__icn">\
                                   <div class="pswp__preloader__cut">\
                                       <div class="pswp__preloader__donut"></div>\
                                   </div>\
                               </div>\
                           </div>\
                       </div>\
                       <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\
                           <div class="pswp__share-tooltip"></div>\
                       </div>\
                       <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\
                       <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\
                       <div class="pswp__caption">\
                       <div class="pswp__caption__center"></div>\
                       </div>\
                   </div>\
               </div>\
           </div>');
    }
}