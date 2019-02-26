import Vue from 'vue';
import App from '@/App.vue'; // <---- problem here
// import './somefile'; // the same problem

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
