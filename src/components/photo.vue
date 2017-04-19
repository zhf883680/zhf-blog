<template>
  <div id="app">
      <div class="container" v-for="item in items">
            <img src="/Img/dog.jpg" class="img-responsive" alt="图片" v-lazy="item.Path" style="min-height:60%;min-width:80%">
        </div> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
   // return {hello:"asdwq"}
    return {items:JSON.parse('[{"No":1,"Path":"/img/1.jpeg"},{"No":2,"Path":"/img/1.jpg"},{"No":3,"Path":"/img/1.png"},{"No":4,"Path":"/img/10.jpg"},{"No":5,"Path":"/img/10.PNG"},{"No":6,"Path":"/img/11.jpg"},{"No":7,"Path":"/img/12.jpg"},{"No":8,"Path":"/img/12.png"},{"No":9,"Path":"/img/13.jpg"},{"No":10,"Path":"/img/13.png"},{"No":11,"Path":"/img/14.jpg"},{"No":12,"Path":"/img/14.png"},{"No":13,"Path":"/img/15.jpg"},{"No":14,"Path":"/img/15.png"},{"No":15,"Path":"/img/16.jpg"},{"No":16,"Path":"/img/16.png"},{"No":17,"Path":"/img/17.jpg"},{"No":18,"Path":"/img/17.png"},{"No":19,"Path":"/img/18.jpg"},{"No":20,"Path":"/img/18.png"},{"No":21,"Path":"/img/19.jpg"},{"No":22,"Path":"/img/19.png"},{"No":23,"Path":"/img/2.jpg"},{"No":24,"Path":"/img/2.png"},{"No":25,"Path":"/img/20.jpg"},{"No":26,"Path":"/img/20.png"},{"No":27,"Path":"/img/21.jpg"},{"No":28,"Path":"/img/21.png"},{"No":29,"Path":"/img/22.jpg"},{"No":30,"Path":"/img/22.png"},{"No":31,"Path":"/img/23.jpg"},{"No":32,"Path":"/img/23.png"},{"No":33,"Path":"/img/24.jpg"},{"No":34,"Path":"/img/24.png"},{"No":35,"Path":"/img/25.jpg"},{"No":36,"Path":"/img/25.png"},{"No":37,"Path":"/img/26.jpg"},{"No":38,"Path":"/img/26.png"},{"No":39,"Path":"/img/27.jpg"},{"No":40,"Path":"/img/27.png"},{"No":41,"Path":"/img/28.jpg"},{"No":42,"Path":"/img/28.png"},{"No":43,"Path":"/img/29.jpg"},{"No":44,"Path":"/img/29.png"},{"No":45,"Path":"/img/3.jpeg"},{"No":46,"Path":"/img/3.jpg"},{"No":47,"Path":"/img/3.PNG"},{"No":48,"Path":"/img/30.jpg"},{"No":49,"Path":"/img/30.png"},{"No":50,"Path":"/img/31.jpg"},{"No":51,"Path":"/img/31.png"}]')}
  },
  mounted() {
            var $this = this;
        }
}
</script>


