import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import PostPage from '../components/PostPage.vue'
import UserProfilePage from '../components/UserProfilePage.vue'
import UserPostFeed from '../components/UserPostFeed.vue'
import TableComponent from '../components/TableComponent.vue'

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
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'singlepost',
    component: PostPage
  },
  {
    path: '/user/:id',
    name: 'singleuserpage',
    component: UserProfilePage
  },
  {
    path: '/user/:username/posts',
    name: 'singleuserfeed',
    component: UserPostFeed
  },
  {
    path: '/table',
    name: 'poststable',
    component: TableComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
