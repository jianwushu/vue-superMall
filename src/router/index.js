import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Cart from "views/cart/Cart";
import Category from "views/category/Category";
import Home from "views/home/Home";
import Profile from "views/profile/Profile";

const routes = [
  {
    path: '',
    component: Home
  },{
    path: '/home',
    component: Home
  },{
    path: '/category',
    component: Category
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/profile',
    component: Profile
  }

]

export default new Router({
  routes,
  mode: 'history'
})
