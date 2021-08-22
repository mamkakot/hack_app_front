import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/residents',
    name: 'Residents',
    component: () => import('../views/Residents.vue'),
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/documents',
    name: 'Documents',
    component: () => import('../views/Documents.vue'),
  },
  {
    path: '/workplaces',
    name: 'Workplaces',
    component: () => import('../views/WorkplacesList.vue'),
  },
  {
    path: '/workplace/:label?',
    name: 'WorkplaceShow',
    props: true,
    component: () => import('../views/WorkplaceShow.vue'),
  },
  {
    path: '/resident/:username?',
    name: 'Resident',
    props: true,
    component: () => import('../views/Resident.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
