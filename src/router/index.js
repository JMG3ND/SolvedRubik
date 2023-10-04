import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';

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
      component: () => import('../views/Cube3x3View.vue'),
      children: [
        {
          path: '',
          name: 'introductionCube3x3',
          component: () => import('../views/articlesCube3x3/IntroductionCube3x3.vue')
        },
        {
          path: 'movement-notation',
          name: 'movement-notation',
          component: () => import('../views/articlesCube3x3/MovementNotationView.vue')
        },
        {
          path: 'fridrich',
          name: 'fridrich',
          component: () => import('../views/articlesCube3x3/FridrichView.vue')
        },
        {
          path: 'f2l',
          name: 'f2l',
          component: () => import('../views/articlesCube3x3/fridrichview/F2LView.vue')
        },
        {
          path: 'fridrich-cross',
          name: 'fridrich-cross',
          component: () => import('../views/articlesCube3x3/fridrichview/FridrichCrossView.vue')
        },
        {
          path: 'oll',
          name: 'oll',
          component: () => import('../views/articlesCube3x3/fridrichview/OLLView.vue')
        },
        {
          path: 'pll',
          name: 'pll',
          component: () => import('../views/articlesCube3x3/fridrichview/PLLView.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/NotFound404View.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  }
})

export default router;
