
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Lazyload from "../static/vue.lazyimg.min"
import router from './router'

Vue.use(ElementUI);

Vue.use(Lazyload, {
        error: '/Scripts/layer/skin/default/loading-2.gif',
        loading: '/Scripts/layer/skin/default/loading-2.gif',
        try: 3 // default 1
    })

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
