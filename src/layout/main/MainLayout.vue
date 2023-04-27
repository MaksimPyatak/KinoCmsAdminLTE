<template>
   <div class="wrapper">
      <MainHeader />
      <slot />
   </div>
</template>

<script setup>
import MainHeader from './components/MainHeader.vue';
</script>

<style lang="scss" scoped>
.layout {
   background-color: darkseagreen;
}
</style>