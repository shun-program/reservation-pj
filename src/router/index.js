import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Thanks from '../views/Thanks.vue'
import Done from '../views/Done.vue'
import Detail from '../views/Detail.vue'
import Mypage from '../views/Mypage.vue'
import store from "../store/index"

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    requiresAuth: true,
  },
  }, {
  path: '/registration',
  name: 'registration',
  component: Registration
}, {
  path: '/thanks',
  name: 'thanks',
  component: Thanks,
}, {
  path: '/done',
  name: 'done',
  component: Done,
  meta: {
    requiresAuth: true,
  },
}, {
  path: '/detail/:shop_id',
  name: 'detail',
  component: Detail,
  meta: {
    requiresAuth: true,
  },
  }, {
  path: '/mypage',
  name: 'mypage',
  component: Mypage,
  props: true,
   meta: {
    requiresAuth: true,
  },
  }]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&!store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
