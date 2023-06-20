import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Principal from '../components/principal/Principal.vue';
import IngressoComponent from '../components/ingresso/Ingresso.vue'
import Experiencia from '../components/experiencia/Experiencia.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      path:'/principal'
    }
  },
  {
    path: '/principal',
    component: Principal
  },
  {
    path:'/experiencia',
    component: Experiencia
  },
  {
    path: '/ingresso',
    component: IngressoComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
