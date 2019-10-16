import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.less'
import App from './App'
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false

window.gvm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
