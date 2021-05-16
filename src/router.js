import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import productList from './screens/productList';
import productPurchase from './screens/productPurchase';
import productSell from './screens/productSell';

const routes = [
    { path : "/", component : productList },
    { path : "/urun-islemleri", component : productPurchase },
    { path : "/urun-cikisi", component : productSell },
    { path : "*", redirect : "/"}
  ];
  
  export const router = new VueRouter({
    mode : "history",
    routes
  });