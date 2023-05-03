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
            <!--<img v-for="item in dataForDoun" :src="item.image" :key="item.id" alt="">-->
            <ImageCard v-for="item in dataForDoun" :img="item.image" :id="item.id" :key="item.id" ratio="19%"
               @updatUrl="updatUrl" @updateText="updateText">
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

function updatUrl(id, value) {
   console.log(value);
   for (const item of dataForDoun.value) {
      if (item.id == id) {
         item.url = value;
         console.log(item);
      }
   }
}
function updateText(id, value) {
   console.log(value);
   for (const item of dataForDoun.value) {
      if (item.id == id) {
         item.text = value;
         console.log(item);
      }
   }
}

function changeShowingBlock(value) {
   showingBlock.value = value;
}

const handleFileUpload = async (files) => {
   for (const item of files) {
      let id = Date.now() + Math.random().toString(36).substring(10);
      let objItem = {
         id: id,
         image: URL.createObjectURL(item), //item
         url: '',
         text: ''
      }
      dataForDoun.value.push(objItem)
   }
}

const dataForDoun = ref([]);

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