import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cube3x3View from '../views/Cube3x3View.vue'
import BeginnerView from '../views/articles/BeginnerView.vue'
import FridrichView from '../views/articles/FridrichView.vue'

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
      component: Cube3x3View,
      children: [
        {
          path: 'beginners',
          name: 'beginner',
          component: BeginnerView
        },
        {
          path: 'fridrich',
          name: 'fridrich',
          component: FridrichView
        },
      ]
    },
  ]
})

export default router
