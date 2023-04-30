import { createRouter, createWebHashHistory } from 'vue-router'
import StatisticPage from '../views/StatisticPage.vue'

const router = createRouter({
   history: createWebHashHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'statistic',
         component: StatisticPage,
      },
      {
         path: '/about-cinema',
         name: 'about-cinema',
         component: () => import('../views/AboutCinema.vue')
      },
      {
         path: '/banners',
         name: 'banners',
         component: () => import('../views/BannersPage.vue')
      },
      {
         path: '/films',
         name: 'films',
         component: () => import('../views/AllFilms.vue')
      },
      {
         path: '/film',
         name: 'film',
         component: () => import('../views/FilmPage.vue')
      },
      {
         path: '/cinemas',
         name: 'cinemas',
         component: () => import('../views/CinemasPage.vue')
      },
      {
         path: '/cinema-card',
         name: 'cinema-card',
         component: () => import('../views/CinemaCard.vue')
      },
      {
         path: '/hall',
         name: 'hall',
         component: () => import('../views/HallPage.vue')
      },
      {
         path: '/all-news',
         name: 'all-news',
         component: () => import('../views/AllNews.vue')
      },
      {
         path: '/news',
         name: 'news',
         component: () => import('../views/NewsPage.vue')
      },
      {
         path: '/all-promotions',
         name: 'all-promotions',
         component: () => import('../views/AllPromotions.vue')
      },
      {
         path: '/pages-list',
         name: 'pages-list',
         component: () => import('../views/PagesList.vue')
      },
      {
         path: '/users',
         name: 'users',
         component: () => import('../views/UsersPage.vue')
      },
      {
         path: '/user-editing',
         name: 'user-editing',
         component: () => import('../views/UserEditing.vue')
      },
      {
         path: '/mailing',
         name: 'mailing',
         component: () => import('../views/MailingPage.vue')
      },
      {
         path: '/select-user',
         name: 'select-user',
         component: () => import('../views/SelectUsers.vue')
      },
   ]
})

export default router
