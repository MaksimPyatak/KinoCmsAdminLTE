<template>
   <!-- Main Sidebar Container -->
   <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link main-sidebar__logo-link">
         <!--<img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">-->
         <span class="brand-text font-weight-light main-sidebar__logo">Kino CMS</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">

         <!-- Sidebar Menu -->
         <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
               <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
               <NavItem v-for="item in menuList" :icon="item.icon" :link="item.link" :key="item.id">
                  Статистика
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
      icon: 'fa-solid fa-chart-pie fa-spin',
      link: '/'
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
</style>