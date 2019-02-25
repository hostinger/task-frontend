import Vue from 'vue';
import App from './App.vue';

// USING VUE-BOOTSTRAP
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// IMPORT FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// COUNTDOWN FOR VUE
import vueAwesomeCountdown from 'vue-awesome-countdown';


Vue.config.productionTip = false;


Vue.use(BootstrapVue);
Vue.use(vueAwesomeCountdown, 'countdown');

// ADDING THE ICONS
library.add(faCheck, faCaretDown, faCaretLeft, faCaretRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  render: h => h(App),
}).$mount('#app');
