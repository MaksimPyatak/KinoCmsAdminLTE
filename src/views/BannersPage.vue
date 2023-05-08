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
         <div class="banner__slider-speed">
            <label for="select" class="banner__label-select">Швидкість обертання</label>
            <select class="banner__select" name="select" v-model="sliderSpeed">
               <option value="5" selected>5</option>
               <option value="10">10</option>
               <option value="15">15</option>
            </select>
         </div>
         <div class="banner__saving-button-box">
            <div class="banner__saving-button" @click="saveData">
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
import FileUpload from "../components/FileUpload.vue";
import { db, uploadFile } from '../firebase/index.js'
import { getOrigId } from "../helpers/getOrigId.js";
import { addDataToFirebase } from "../helpers/addDataToFirebase.js";


async function createData(id, name, value) {
   await setDoc(doc(db, 'topBanner', id), {
      [name]: value
   })
}


async function saveData() {
   console.log(dataForUpload.value);
   for await (const item of dataForUpload.value) {
      const { downloadUrl, metadata, snapshort } = await uploadFile(item.image);
      addDataToFirebase(item.id, 'topBanner', 'downloadUrl', downloadUrl, false);
      console.log(downloadUrl);
      for (const key in item) {
         if (Object.hasOwnProperty.call(item, key)) {
            if (key != "id" & key != "image") {
               addDataToFirebase(item.id, 'topBanner', key, item[key], true)
            }

         }
      }
   }
}
const showingBlock = ref(true)

function updatUrl(id, value) {
   for (const item of dataForUpload.value) {
      if (item.id == id) {
         item.url = value;
      }
   }
}
function updateText(id, value) {
   for (const item of dataForUpload.value) {
      if (item.id == id) {
         item.text = value;
      }
   }
}

function changeShowingBlock(value) {
   showingBlock.value = value;
}

const dataForUpload = ref([]);
/*

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

const sliderSpeed = ref('5')
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