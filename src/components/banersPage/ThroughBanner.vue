<template>
   <div class="through-banner">
      <GeneralCard>
         <template #title>
            Наскрізний банер на задньому фоні
         </template>
         <template #label>
            <!--<ToggleCheckbox :value="showingBlock" @inputValue="changeShowingBlock" />-->
         </template>
         <template #body>
            <div class="through-banner__main-block">
               <div class="through-banner__checkbox-section">
                  <div class="through-banner__checkbox-box">
                     <input class="through-banner__checkbox-input" type="radio" id="img" name="through-banner" value="img"
                        v-model="whichThroughBanner">
                     <label class="through-banner__checkbox-lebel" for="img">Фото на фон</label>
                  </div>
                  <div class="through-banner__checkbox-box">
                     <input class="through-banner__checkbox-input" type="radio" id="color" name="through-banner"
                        value="color" v-model="whichThroughBanner">
                     <label class="through-banner__checkbox-lebel" for="color">Колір на фон</label>
                  </div>
               </div>
               <div class="through-banner__adding-section">
                  <div class="through-banner__photo-box" v-if="whichThroughBanner == 'img'">
                     <div class="through-banner__img-box">
                        <div class="through-banner__img">
                           <img :src="srcImg" />
                        </div>
                     </div>
                     <FileUpload class="through-banner__upload" :multiple="false" @uploadedFiles="handleFileUpload" />
                     <CastomButton class="through-banner__del-photo-btn" @click="click">
                        Видалити
                     </CastomButton>
                  </div>
                  <div class="through-banner__selected-color-box" v-else>
                     <div class="through-banner__color-box">
                        <label for="colorWell">Color:</label>
                        <input type="color" v-model="selectingColor">
                     </div>
                     <!--<CastomButton class="through-banner__select-color-btn">
                        Вибрати колір
                     </CastomButton>
                     <CastomButton class="through-banner__del-color-btn">
                        Видалити
                     </CastomButton>-->
                  </div>
               </div>
            </div>
         </template>
         <template #footer>
            <CastomButton class="through-banner__saving-button" @click="saveChange" :disabled="isDisabledBtnSave"
               :loading="loading">
               <!--<div class="through-banner__saving-button" @click="saveChange">-->
               <span>Зберегти</span>
               <!--</div>-->
            </CastomButton>
            <!--<div class="through-banner__saving-button-box">
               <div class="through-banner__saving-button" @click="saveChange">
                  <span>Зберегти</span>
               </div>
            </div>-->
         </template>
      </GeneralCard>
   </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import GeneralCard from '@/components/GeneralCard.vue';
import CastomButton from "../CastomButton.vue";
import ToggleCheckbox from '@/components/ToggleCheckbox.vue';
import ImageCard from '@/components/ImageCard.vue';
import CastomSelect from '@/components/CastomSelect.vue';
import FileUpload from "@/components/FileUpload.vue";
import { db, uploadFile, saveNewData, addDataToFirebase } from '@/firebase/index.js';
import { getOrigId, updatObjectValue, delCard } from "@/helpers/dataHandler.js";

onMounted(() => {
   getOllDoc()
})

function click() {
   console.log('Click')
}

const whichThroughBanner = ref('')
const srcImg = ref(null)
const uploadingFile = ref(null)
const selectingColor = ref(null)
const dataForUpload = ref({})

const isDisabledBtnSave = computed(() => {
   console.log(dataForUpload.value)
   return Object.keys(dataForUpload.value).length > 0 ? false : true
})

const loading = ref(false);
let downloadData;
let querySnapshot; //?Чому виyіс за межі функції???
/**
* Завантажує дані з клекції 'collectionName'firebase, та
* зберігає їх в масив 'arreyForSave'
* @param arreyForSave - масив для збереження даниx.
* @param collectionName - назва колекції, з якої зкачуються дані.
*/
async function getOllDoc() {
   try {
      querySnapshot = await getDocs(collection(db, 'Through banner'))
      if (!querySnapshot.empty) {
         querySnapshot.forEach((doc) => {
            downloadData = doc.data()
            if (doc.data().downloadUrl) {
               srcImg.value = doc.data().downloadUrl;
            }
            if (doc.data().whichBanner) {
               whichThroughBanner.value = doc.data().whichBanner
               console.log(whichThroughBanner.value);
            }
            if (doc.data().selectingColor) {
               selectingColor.value = doc.data().selectingColor
               console.log(selectingColor.value);
            }
         })
      }
      console.log(downloadData);
   } catch (error) {
      console.log(error)
   }
}

watch(whichThroughBanner, (newValue) => {
   if (downloadData.whichBanner != newValue) {
      dataForUpload.value.whichBanner = newValue
   } else if (dataForUpload.value.whichBanner && downloadData.whichBanner == newValue) {
      delete dataForUpload.value.whichBanner
   }
})

watch(selectingColor, (newValue) => {
   if (downloadData.selectingColor != newValue) {
      dataForUpload.value.selectingColor = newValue
   } else if (dataForUpload.value.selectingColor && downloadData.selectingColor == newValue) {
      delete dataForUpload.value.selectingColor
   }
})

/**
* Додає файли до масиву 'dataForUpload'
*/
function handleFileUpload(files) {
   for (const file of files) {
      srcImg.value = URL.createObjectURL(file)
      uploadingFile.value = file;
   }
}

async function saveChange() {
   loading.value = true
   try {
      if (uploadingFile.value) {
         console.log(uploadingFile.value);
         const { downloadUrl, metadata } = await uploadFile(uploadingFile.value);
         dataForUpload.value.downloadUrl = downloadUrl;
         dataForUpload.value.fullPath = metadata.fullPath;
      }
      await setDoc(doc(db, 'Through banner', 'main'),
         dataForUpload.value
         , { merge: true })
   } catch (error) {
      console.log(error);
   }
   loading.value = false
}

</script>
<style lang="scss" scoped>
.through-banner {

   &__main-block {
      display: flex;
      justify-content: start;
      align-items: center;
   }

   &__checkbox-section {
      margin-right: 20px;
   }

   &__checkbox-box {
      &:not(:last-child) {
         margin-bottom: 20px;
      }
   }

   &__checkbox-input {
      margin-right: 10px;
   }

   &__checkbox-lebel {
      margin-bottom: 0;
   }

   &__adding-section {}

   &__photo-box {
      display: flex;
      justify-content: start;
      align-items: center;
   }

   &__img-box {
      width: 150px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   &__img {
      padding-top: 150%;
      position: relative;
      flex: 1 1 auto;

      img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 0.25rem;
      }
   }

   &__upload {
      height: 40px;
      width: 150px;
      margin-right: 20px;
   }

   &__del-photo-btn {}

   &__selected-color-box {
      display: flex;
      justify-content: start;
      align-items: center;
   }

   &__color-box {
      width: 150px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   &__color {
      padding-top: 150%;
      border: 1px solid rgba(128, 128, 128, 0.476);
      position: relative;
      flex: 1 1 auto;
   }

   &__select-color-btn {
      margin-right: 20px;
   }

   &__del-color-btn {}

   &__saving-button-box {}

   &__saving-button {
      width: 250px;
      height: 45px;
      background: #007bff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
         color: white;
         font-size: 22px;
      }
   }
}
</style>