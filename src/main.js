import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import vSelect from 'vue-select'
import firebase from 'firebase'
import VueAnalytics from 'vue-analytics';

Vue.component('v-select', vSelect);
import 'vue-select/dist/vue-select.css';

Vue.use(VueRouter)
Vue.config.productionTip = false

const myRouter = new VueRouter({ 
  routes: Routes,
  mode: 'history'
  });

var app
firebase.auth().onAuthStateChanged(async () => {
if (!app) {
   //wait to get user
   await firebase.auth().currentUser;

   //start app
   app = new Vue({
     render: h => h(App),
     router:myRouter,
   }).$mount("#app");
 }
});

Vue.use(VueAnalytics, {
  id: 265257878,
  VueRouter
})
