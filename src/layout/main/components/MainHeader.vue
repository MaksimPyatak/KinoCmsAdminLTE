<template>
   <nav class="main-header navbar navbar-expand navbar-dark navbar-light">
      <ul class="navbar-nav">
         <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
         </li>
      </ul>

      <ul class="navbar-nav ml-auto main-header__my-office">
         <li class="nav-item main-header__my-office">
            <a class="nav-link main-header__avatar-link" data-toggle="dropdown" href="#">
               <img class="main-header__avatar" src="../img/avatar.svg" alt="">
               <h3>Адміністратор</h3>
            </a>

         </li>
         <li class="nav-item main-header__exit">
            <a class="nav-link" data-toggle="dropdown" href="#">
               <img class="main-header__avatar" src="../img/exit.svg" alt="">
            </a>
         </li>
      </ul>
      <div v-if="compLengthMessages" class="main-header__upload-modal-section">
         <UploadModal v-for="item in uploadModal.messages" :key="item" :componentsName="item.componentsName"
            :isError="item.isError" class="main-header__upload-modal" />
      </div>
   </nav>
</template>

<script setup>
import { computed } from "vue";
import UploadModal from '@/components/UploadModal.vue';
import { useUploadModalStore } from "@/stores/uploadModal.js";

const uploadModal = useUploadModalStore();
const compLengthMessages = computed(() => {
   //console.log(uploadModal.messages);
   //console.log(Object.keys(uploadModal.messages).length);
   return Object.keys(uploadModal.messages).length
})
</script>

<style lang="scss" scoped>
.main-header {
   height: 59.75px;
   position: sticky;
   top: 0;

   &__my-office {
      height: 35px;
   }

   &__avatar-link {
      height: 100%;
      margin-right: 20px;
      display: flex;
      align-items: center;
   }

   &__avatar {
      height: 100%;
      padding-right: 10px;
      object-fit: cover;
   }

   &__upload-modal-section {
      position: absolute;
      top: 10px;
      right: 0;
      margin: -0 10px 0 auto;
      max-width: 300px;
      width: max-content;
      z-index: 9999;

   }

   &__upload-modal {
      //position: absolute;
      //top: 10px;
      //right: 10px;
   }
}
</style>