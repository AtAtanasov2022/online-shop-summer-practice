import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import LogOut from '../views/LogOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOut
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
