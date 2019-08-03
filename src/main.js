import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import './style/font.css';
Vue.use(VueRouter);
Vue.config.productionTip = false

import Home from './pages/home.vue';
import Game from './pages/game.vue';

let router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/game', component: Game}
  ]
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
