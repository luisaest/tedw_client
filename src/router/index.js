import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/medic',
    name: 'Medic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/index.vue')
  },
  {
    path: '/surveymedic',
    name: 'SurveyMedic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/encuesta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
