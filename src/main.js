import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

library.add(faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// jquery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import './global.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
