import { createRouter, createWebHistory } from 'vue-router'
import StatisticPage from '../views/StatisticPage.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'statistic',
         component: StatisticPage,
      },
      {
         path: '/about-cinema',
         name: 'about-cinema',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AboutCinema.vue')
      }
   ]
})

export default router
