<template>
   <div class="wrapper">
      <MainHeader />
      <MainSidebar />
      <div class="content-wrapper">

         <slot />
      </div>
   </div>
</template>

<script setup>
import MainHeader from './components/MainHeader.vue';
import MainSidebar from './components/MainSidebar.vue'
import 'admin-lte'
</script>

<style lang="scss" scoped>
.content-wrapper {
   padding: 20px;
}
</style>