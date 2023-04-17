import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cube3x3View from '../views/Cube3x3View.vue'

import ResolutionMethodsView from '../views/articles/ResolutionMethodsView.vue';
import MovementNotationView from '../views/articles/MovementNotationView.vue';

import BeginnerView from '../views/articles/BeginnerView.vue'
import CrossBeginnerView from '../views/articles/beginnerview/CrossBeginnerView.vue';
import BottomCornersView from '../views/articles/beginnerview/BottomCornersView.vue';
import SecondLayerView from '../views/articles/beginnerview/SecondLayerView.vue';
import UpperCrossView from '../views/articles/beginnerview/UpperCrossView.vue';
import TopCornersView from '../views/articles/beginnerview/TopCornersView.vue';
import CornerOrientationView from '../views/articles/beginnerview/CornerOrientationView.vue';
import FinalPermutationOfTheCornersView from '../views/articles/beginnerview/FinalPermutationOfTheCornersView.vue';

import FridrichView from '../views/articles/FridrichView.vue'
import F2LView from '../views/articles/fridrichview/F2LView.vue';
import OLLView from '../views/articles/fridrichview/OLLView.vue';
import PLLView from '../views/articles/fridrichview/PLLView.vue';
import FridrichCrossView from '../views/articles/fridrichview/FridrichCrossView.vue';


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
          path: 'movement-notation',
          name: 'movement-notation',
          component: MovementNotationView
        },
        {
          path: 'resolution-methods',
          name: 'resolution-methods',
          component: ResolutionMethodsView
        },
        {
          path: 'beginner',
          name: 'beginner',
          component: BeginnerView
        },
        {
          path: 'begginer-cross',
          name: 'begginer-cross',
          component: CrossBeginnerView
        },
        {
          path: 'bottom-corners',
          name: 'bottom-corners',
          component: BottomCornersView
        },
        {
          path: 'second-layer',
          name: 'second-layer',
          component: SecondLayerView
        },
        {
          path: 'upper-cross',
          name: 'upper-cross',
          component: UpperCrossView
        },
        {
          path: 'top-corners',
          name: 'top-corners',
          component: TopCornersView
        },
        {
          path: 'corner-orientation',
          name: 'corner-orientation',
          component: CornerOrientationView
        },
        {
          path: 'final-permutation-of-the-corners',
          name: 'final-permutation-of-the-corners',
          component: FinalPermutationOfTheCornersView
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
