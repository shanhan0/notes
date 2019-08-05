// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import  AlertConstructor from './utils/dialogs'
Vue.prototype.$showDialog = AlertConstructor
Vue.use(AlertConstructor)


Vue.config.productionTip = false
// Vue.prototype.$AlertConstructor = AlertConstructor



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
