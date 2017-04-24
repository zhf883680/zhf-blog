import Vue from 'vue'
import Router from 'vue-router'
import show from '@/components/show'
import photo from '@/components/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      component: show
    },
    {path: '/photo', component: photo}
  ]
})
