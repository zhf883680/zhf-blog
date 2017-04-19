import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import atry from '@/components/try'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {path: '/atry', component: atry}
  ]
})
