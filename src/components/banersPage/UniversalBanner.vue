<template>
   <GeneralCard>
      <template #title>
         На головній верх
      </template>
      <template #label>
         <ToggleCheckbox :value="showingBlock" @inputValue="changeShowingBlock" />
      </template>
      <template #body>
         <div class="banner__main-block">
            <!--<img v-for="item in dataForShow" :src="item.url" :key="item.id" alt="">-->
            <ImageCard v-for="item in dataForShow" :key="item.id" :id="item.id" :src="item.downloadUrl" :url="item.url"
               :fullPath="item.fullPath" :text="item.text" ratio="19%" @updatUrl="updatUrl" @updateText="updateText"
               @close="delTopCard">
            </ImageCard>
            <FileUpload :multiple="true" @uploadedFiles="handleFileUpload" />
         </div>
      </template>
      <template #footer>
         <CastomSelect v-model="topSliderSpeed" :selectText="topSelectText">
            Швидкість зміни слайдів
         </CastomSelect>
         <div class="banner__saving-button-box">
            <div class="banner__saving-button" @click="saveChange">
               <span>Зберегти</span>
            </div>
         </div>
      </template>
   </GeneralCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs, } from "firebase/firestore";
import { db, saveNewData, addDataToFirebase } from '../firebase/index.js';
import { getOrigId, updatObjectValue, delCard } from "../helpers/dataHandler.js";
import GeneralCard from '../components/GeneralCard.vue';
import ToggleCheckbox from '../components/ToggleCheckbox.vue';
import ImageCard from '../components/ImageCard.vue';
import CastomSelect from '../components/CastomSelect.vue';
import FileUpload from "../components/FileUpload.vue";


const showingBlock = ref(true)
const loading = ref(false)
onMounted(() => {
   getOllDoc('topBanner', dataForShow.value)
})


/**
* Завантажує дані з клекції 'collectionName'firebase, та
* зберігає їх в масив 'arreyForSave'
* @param arreyForSave - масив для збереження даниз.
* @param collectionName - назва колекції, з якої зкачуються дані.
*/
async function getOllDoc(collectionName, arreyForSave) {
   const querySnapshot = await getDocs(collection(db, collectionName));
   querySnapshot.forEach((doc) => {
      if (doc.id != 'showingBlock' && doc.id != 'topSliderSpeed') {
         arreyForSave.push(doc.data())
      } else if (doc.id == 'showingBlock') {
         showingBlock.value = doc.data().show
      } else if (doc.id == 'topSliderSpeed') {
         topSliderSpeed.value = doc.data().speed
      }
   })
}

async function saveChange() {
   loading.value = true
   await saveNewData(dataForUpload.value, 'topBanner', dataForDel.value);
   await addDataToFirebase('showingBlock', 'topBanner', 'show', showingBlock.value, false);
   await addDataToFirebase('topSliderSpeed', 'topBanner', 'speed', topSliderSpeed.value, false);
   loading.value = false
}

function updatUrl(id, value) {
   updatObjectValue(dataForUpload.value, id, 'url', value)
   console.log(dataForUpload.value);
}
function updateText(id, value) {
   updatObjectValue(dataForUpload.value, id, 'text', value)
}

function changeShowingBlock(value) {
   showingBlock.value = value;
}

const dataForUpload = ref([]);
const dataForShow = ref([]);
/**
* Додає файли до масиву 'dataForUpload'
*/
function handleFileUpload(files) {
   for (const item of files) {
      let id = getOrigId()
      let objItem = {
         id: id,
         image: item,
      }
      let objItemForShow = {
         id: id,
         downloadUrl: URL.createObjectURL(item),
      }
      dataForUpload.value.push(objItem);
      dataForShow.value.push(objItemForShow)
      //console.log(dataForShow.value);
      console.log(dataForUpload.value);
   }
}

const dataForDel = ref([])
function delTopCard(id, fullPath) {
   delCard(id, dataForShow.value, dataForUpload.value, 'topBanner', dataForDel.value, fullPath)
}
const topSelectText = [5, 10, 15]
const topSliderSpeed = ref('5')

</script>

<style lang="scss" scoped></style>