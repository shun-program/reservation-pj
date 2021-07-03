import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Thanks from '../views/Thanks.vue'
import Done from '../views/Done.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/home',
  name: 'Home',
  component: Home
  }, {
  path: '/registration',
  name: 'registration',
  component: Registration
}, {
  path: '/thanks',
  name: 'thanks',
  component: Thanks
}, {
  path: '/done',
  name: 'done',
  component: Done
}]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router