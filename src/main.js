import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sharedUI } from 'shared-ui'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(sharedUI)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
