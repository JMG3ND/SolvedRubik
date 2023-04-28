import { createRouter, createWebHistory } from 'vue-router'

import IntroductionCube3x3View from '../views/articlesCube3x3/IntroductionCube3x3.vue';
import MovementNotationView from '../views/articlesCube3x3/MovementNotationView.vue'

import FridrichView from '../views/articlesCube3x3/FridrichView.vue'
import F2LView from '../views/articlesCube3x3/fridrichview/F2LView.vue';
import OLLView from '../views/articlesCube3x3/fridrichview/OLLView.vue';
import PLLView from '../views/articlesCube3x3/fridrichview/PLLView.vue';
import FridrichCrossView from '../views/articlesCube3x3/fridrichview/FridrichCrossView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/cube-three-by-three',
      name: 'cube3x3',
      component: import('../views/Cube3x3View.vue'),
      children: [
        {
          path: '',
          name: '',
          component: IntroductionCube3x3View
        },
        {
          path: 'movement-notation',
          name: 'movement-notation',
          component: MovementNotationView
        },
        {
          path: 'fridrich',
          name: 'fridrich',
          component: FridrichView
        },
        {
          path: 'f2l',
          name: 'f2l',
          component: F2LView
        },
        {
          path: 'fridrich-cross',
          name: 'fridrich-cross',
          component: FridrichCrossView
        },
        {
          path: 'oll',
          name: 'oll',
          component: OLLView
        },
        {
          path: 'pll',
          name: 'pll',
          component: PLLView
        },
      ]
    },
  ]
})

export default router
