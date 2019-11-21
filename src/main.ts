import Vue from 'vue';
import App from './App.vue';
import './config/registerServiceWorker';
import router from './router';
import store from './store';
import './config/quasar'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
