import Vue from 'vue'
import Router from 'vue-router'
import show from '@/components/show'
import photo from '@/components/photo'
import article from '@/components/Article'
import main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {path:'/show/:id',component:show,name:"showList"},
    {path: '/photo', component: photo,name:"photo"},
    {path:'/article/:id',component:article,name:"article"}
  ]
})
