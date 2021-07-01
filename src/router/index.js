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
    path: '/medic/encuestas',
    name: 'encuestas-medico',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/encuesta.vue')
  },
  {
    path:'/alumno',
    name:'alumno',
    component:()=>import('../views/alumnos/index.vue')
  },
  {
    path:'/alumno/encuesta',
    name:'encuesta-alumno',
    component:()=>import('../views/alumnos/encuesta.vue')
  },
  {
    path:'/alumno/consulta',
    name:'consulta-alumno',
    component:()=>import('../views/alumnos/consulta.vue')
  },
  {
    path:'/alumno/alertas',
    name:'alertas-alumno',
    component:()=>import('../views/alumnos/alertas.vue')
  },
  {
    path:'/alumno/resultados',
    name:'resultados-alumno',
    component:()=>import('../views/alumnos/resultados.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
