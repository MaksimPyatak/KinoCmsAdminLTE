<template>
   <!-- Main Sidebar Container -->
   <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link main-sidebar__logo-link">
         <!--<img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">-->
         <span class="brand-text font-weight-light main-sidebar__logo">Kino CMS</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">

         <!-- Sidebar Menu -->
         <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column">
               <!--data-widget="treeview" role="menu"  -- прибрав за рекомендацією https://pagespeed.web.dev/-->
               <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
               <NavItem v-for="item in menuList" :icon="item.icon" :link="item.link" :key="item.id">
                  {{ item.name }}
               </NavItem>
            </ul>
         </nav>
      </div>
   </aside>
</template>

<script setup>
import { ref } from "vue";
import NavItem from './NavItem.vue';

const menuList = ref([
   {
      id: 'Statistic',
      name: 'Статистика',
      icon: 'fas fa-solid fa-chart-area',
      link: '/'
   },
   {
      id: 'banners',
      name: 'Банери/Слайдери',
      icon: 'fas fa-copy',
      link: '/banners'
   },
   {
      id: 'films',
      name: 'Фільми',
      icon: 'fas fa-film',
      link: '/films'
   },
   {
      id: 'cinemas',
      name: 'Кінотеатри',
      icon: 'fas fa-solid fa-landmark',
      link: '/cinemas'
   },
   {
      id: 'all-news',
      name: 'Новини',
      icon: 'fas fa-solid fa-file',
      link: '/all-news'
   },
   {
      id: 'all-promotions',
      name: 'Акції',
      icon: 'fas fa-solid fa-receipt',
      link: '/all-promotions'
   },
   {
      id: 'pages-list',
      name: 'Сторінки',
      icon: 'fas fa-solid fa-pager',
      link: '/pages-list'
   },
   {
      id: 'users',
      name: 'Користувач',
      icon: 'fas fa-solid fa-user',
      link: '/users'
   },
   {
      id: 'mailing',
      name: 'Розсилка',
      icon: 'fas fa-solid fa-envelope',
      link: '/mailing'
   },
])

</script>

<style lang="scss" scoped>
.main-sidebar {
   &__logo-link {
      display: flex;
      justify-content: center;
      color: white;
   }

   &__logo {
      font-size: 24px;
      font-weight: 900 !important;
   }
}

.fa-house:before {
   content: "\f015";
}
</style>