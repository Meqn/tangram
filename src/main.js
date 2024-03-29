import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 组件包
import tangramUI from './packages'
// 引入 自定义样式
import '@/styles/index.scss'
// 引入第三方包
import VueClipboard from 'vue-clipboard2'

Vue.use(ElementUI)
Vue.use(tangramUI)

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
