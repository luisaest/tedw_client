import { sync } from 'vuex-router-sync'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)