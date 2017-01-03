import Vue from 'vue';
import App from './App.vue';

// Look you don't have to use VueRouter, can have custom name
import MyVueRouter from "vue-router";

import Users from "./Users.vue";

import Home from "./Home.vue";

// vue use router form package
Vue.use(MyVueRouter);

// need routes
const routes = [
  { path: "/users", component: Users},
  { path: "/", component: Home},
];

// assign routes to router
const router = new MyVueRouter({
  routes,
  // history mode, remove the #
  mode: "history"
});

// no key, it becomes key
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
