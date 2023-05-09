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
            <!--<img v-for="item in dataForUpload" :src="item.image" :key="item.id" alt="">-->
            <ImageCard v-for="item in dataForUpload" :img="item.image" :id="item.id" :key="item.id" ratio="19%"
               @updatUrl="updatUrl" @updateText="updateText">
               <!--:img=""-->
            </ImageCard>
            <FileUpload @uploadedFiles="handleFileUpload" />
         </div>
      </template>
      <template #footer>
         <CastomSelect v-model="topSliderSpeed" :selectText="topSelectText">
            Швидкість обертання
         </CastomSelect>
         <div class="banner__saving-button-box">
            <div class="banner__saving-button" @click="saveNewData(dataForUpload, 'topBanner')">
               <span>Зберегти</span>
            </div>
         </div>
      </template>
   </GeneralCard>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore"
import GeneralCard from '../components/GeneralCard.vue';
import ToggleCheckbox from '../components/ToggleCheckbox.vue';
import ImageCard from '../components/ImageCard.vue'
import CastomSelect from '../components/CastomSelect.vue'
import FileUpload from "../components/FileUpload.vue";
import { db, uploadFile, saveNewData } from '../firebase/index.js'
import { getOrigId, updatObjectValue } from "../helpers/dataHandler.js";

const showingBlock = ref(true)

function updatUrl(id, value) {
   updatObjectValue(dataForUpload.value, id, 'url', value)
}
function updateText(id, value) {
   updatObjectValue(dataForUpload.value, id, 'text', value)
}

function changeShowingBlock(value) {
   showingBlock.value = value;
}

const dataForUpload = ref([]);
/*
* Зберігає 
**/
function handleFileUpload(files) {
   for (const item of files) {
      let objItem = {
         id: getOrigId(),
         image: item,
      }
      dataForUpload.value.push(objItem)
   }
}
const topSelectText = [5, 10, 15]
const topSliderSpeed = ref('5')
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

   &__saving-button-box {
      width: 250px;
      height: 45px;
      background: #007bff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
   }

   //!!!!!!?????
   &__label-select {
      margin-right: 10px;
   }
}

:deep(.card-footer) {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>