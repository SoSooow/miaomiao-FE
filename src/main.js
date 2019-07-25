import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import scroller from './components/Better-Scroll'
import loading from './components/loading'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.axios=axios;
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});
Vue.component('scroller',scroller);
Vue.component('loading',loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
