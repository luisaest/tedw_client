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
    path: '/medico/pruebas',
    name: 'pruebas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/test.vue')
  },
  {
    path: '/medico/consultas',
    name: 'consultas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/consultation.vue')
  },
  {
    path: '/medico/encuesta',
    name: 'encuesta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Medico/surveys.vue')
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
    path:'/alumno/resultados/:id',
    name:'resultados-alumno',
    component:()=>import('../views/alumnos/resultados.vue')
  },
  {
    path:'/admin',
    name:'admin',
    component:()=>import('@/views/Administrador/index.vue')
  },
  {
    path:'/admin/personal',
    name:'admin-personal',
    component:()=>import('@/views/Administrador/EstudiantesPersonal.vue')
  },
  {
    path:'/admin/medicamentos',
    name:'admin-medicamentos',
    component:()=>import('@/views/Administrador/Medicamentos.vue')
  },
  {
    path:'/admin/medicos',
    name:'admin-medicos',
    component:()=>import('@/views/Administrador/Medicos.vue')
  },
  {
    path:'/admin/reportes',
    name:'admin-reportes',
    component:()=>import('@/views/Administrador/Reportes.vue')
  },
  {
    path:'/admin/personal/edit/:id',
    name:'admin-edit',
    component:()=>import('@/views/Administrador/EditPersonal.vue')
  },
  {
    path:'/admin/medicina/create',
    name:'crear-medicina',
    component:()=>import('@/views/Administrador/CrearMedicina.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
