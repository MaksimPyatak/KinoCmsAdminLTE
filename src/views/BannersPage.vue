<template>
   <div class="banner">
      <h1>Banner</h1>
   </div>
   <GeneralCard>
      <template #title>
         На головній верх
      </template>
      <template #label>
         <ToggleCheckbox :value="showingBlock" @inputValue="changeShowingBlock" />
      </template>
      <template #body>

         <div class="banner__main-block">
            <ImageCard ratio="19%" @updat-url="test" @updateText="test">
               <!--:img=""-->
            </ImageCard>
            <FileUpload @uploadedFiles="handleFileUpload" />
         </div>
      </template>
   </GeneralCard>
</template>

<script setup>
import { ref } from "vue";
import GeneralCard from '../components/GeneralCard.vue';
import ToggleCheckbox from '../components/ToggleCheckbox.vue';
import ImageCard from '../components/ImageCard.vue'
import FileUpload from "../components/FileUpload.vue";

const showingBlock = ref(true)

function test(params) {
   console.log(params);
}
function changeShowingBlock(value) {
   showingBlock.value = value;
}

const handleFileUpload = async (files) => {
   console.log("selected file", files);
}

</script>

<style lang="scss" scoped>
.banner {
   &__main-block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      div {
         margin-right: 20px;
      }
   }
}
</style>