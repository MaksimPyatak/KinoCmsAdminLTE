<script setup>
import { RouterView } from 'vue-router'
import MainLayout from './layout/main/MainLayout.vue'
//import { computed } from "vue";
//import UploadModal from '@/components/UploadModal.vue';
//import { useUploadModalStore } from "@/stores/uploadModal.js";

//const uploadModal = useUploadModalStore();
//const compLengthMessages = computed(() => {
//   //console.log(uploadModal.messages);
//   //console.log(Object.keys(uploadModal.messages).length);
//   return Object.keys(uploadModal.messages).length
//})

</script>

<template>
   <!--<div v-if="compLengthMessages" class="main-header__upload-modal-section">
      <UploadModal v-for="item in uploadModal.messages" :key="item" :componentsName="item.componentsName"
         :isError="item.isError" class="main-header__upload-modal" />
   </div>-->
   <MainLayout>
      <RouterView />
   </MainLayout>
</template>

<style lang="scss" scoped>
//.main-header {

//   &__upload-modal-section {
//      position: sticky;
//      top: 10px;
//      right: 10px;
//      //margin: -94px 10px 0 auto;
//      max-width: 300px;
//      width: max-content;
//      z-index: 9999;

//   }

//   &__upload-modal {
//      //position: absolute;
//      //top: 10px;
//      //right: 10px;
//   }
//}
</style>
