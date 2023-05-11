import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Cube3x3View from '../views/Cube3x3View.vue';
import IntroductionCube3x3 from '../views/articlesCube3x3/IntroductionCube3x3.vue'
import MovementNotation from '../views/articlesCube3x3/MovementNotationView.vue';
import FridrichCross from '../views/articlesCube3x3/FridrichView.vue';
import F2LView from '../views/articlesCube3x3/fridrichview/F2LView.vue';
import FridrichCrossView from '../views/articlesCube3x3/fridrichview/FridrichCrossView.vue';
import OLLView from '../views/articlesCube3x3/fridrichview/OLLView.vue';
import PLLView from '../views/articlesCube3x3/fridrichview/PLLView.vue';

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
          path: '',
          name: 'introductionCube3x3',
          component: IntroductionCube3x3
        },
        {
          path: 'movement-notation',
          name: 'movement-notation',
          component: MovementNotation
        },
        {
          path: 'fridrich',
          name: 'fridrich',
          component: FridrichCross
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
