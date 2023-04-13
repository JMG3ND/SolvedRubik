import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cube3x3View from '../views/Cube3x3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cube-three-by-three',
      name: 'cube3x3',
      component: Cube3x3View
    },
  ]
})

export default router
