import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.filter('keep_zeros', function (value) {
  if (value < 0) {
    return '00'
  }
  if (value.toString().length <= 1) {
    return `0${value}`
  }
  return value
})

new Vue({
  render: h => h(App)
}).$mount('#app')
