import Vue from 'vue'
import App from './App.vue'

// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

// jquery
//global.$ = $
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import './global.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
