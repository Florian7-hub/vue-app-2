import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$pokeUrl = "https://pokeapi.co/api/v2/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
