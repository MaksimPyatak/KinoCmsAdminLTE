<template>
   <div class="through-banner">
      <GeneralCard>
         <template #title> Наскрізний банер на задньому фоні </template>
         <template #label>
            <!--<ToggleCheckbox :value="showingBlock" @inputValue="changeShowingBlock" />-->
         </template>
         <template #body>
            <div class="through-banner__main-block">
               <div class="through-banner__checkbox-section">
                  <div class="through-banner__checkbox-box">
                     <input
                        class="through-banner__checkbox-input"
                        type="radio"
                        id="img"
                        name="through-banner"
                        value="img"
                        v-model="whichThroughBanner"
                     />
                     <label
                        class="through-banner__checkbox-lebel"
                        for="img"
                        >Фото на фон</label
                     >
                  </div>
                  <div class="through-banner__checkbox-box">
                     <input
                        class="through-banner__checkbox-input"
                        type="radio"
                        id="color"
                        name="through-banner"
                        value="color"
                        v-model="whichThroughBanner"
                     />
                     <label
                        class="through-banner__checkbox-lebel"
                        for="color"
                        >Колір на фон</label
                     >
                  </div>
               </div>
               <div class="through-banner__adding-section">
                  <div
                     class="through-banner__photo-box"
                     v-if="whichThroughBanner == 'img'"
                  >
                     <div
                        v-if="srcImg"
                        class="through-banner__img-box"
                     >
                        <div class="through-banner__img">
                           <img :src="srcImg" />
                        </div>
                     </div>
                     <FileUpload
                        class="through-banner__upload"
                        :multiple="false"
                        @uploadedFiles="handleFileUpload"
                     />
                     <CastomButton
                        v-if="srcImg"
                        class="through-banner__del-photo-btn"
                        @click="deleteImg"
                     >
                        Видалити
                     </CastomButton>
                  </div>
                  <div
                     class="through-banner__selected-color-box"
                     v-else
                  >
                     <div class="through-banner__color-box">
                        <label for="colorWell">Color:</label>
                        <input
                           type="color"
                           v-model="selectingColor"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </template>
         <template #footer>
            <CastomButton
               class="through-banner__saving-button"
               @click="saveChange"
               :disabled="isDisabledBtnSave"
               :loading="loading"
            >
               <span>Зберегти</span>
            </CastomButton>
         </template>
      </GeneralCard>
   </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { collection, doc, setDoc, updateDoc, getDocs, deleteField } from 'firebase/firestore'
import GeneralCard from '@/components/GeneralCard.vue'
import CastomButton from '../CastomButton.vue'
import FileUpload from '@/components/FileUpload.vue'
import { db, uploadFile, delStorageFile } from '@/firebase/index.js'
import { useUploadModalStore } from '@/stores/uploadModal.js'

const emit = defineEmits(['goingLoading'])
const loading = ref(false)
watch(loading, (newValue) => {
   console.log(newValue)
   emit('goingLoading', newValue)
})

const uploadModal = useUploadModalStore()

const props = defineProps({
   name: {
      type: String,
      required: true
   }
})

onMounted(() => {
   getOllDoc()
})

function deleteImg() {
   srcImg.value = null
   uploadingFile.value = null
   //delStorageFile(downloadData.value.fullPath)
}

const whichThroughBanner = ref('')
const srcImg = ref(null)
const uploadingFile = ref(null)
const selectingColor = ref(null)
const dataForUpload = ref({})

const isDisabledBtnSave = computed(() => {
   if (Object.keys(dataForUpload.value).length > 0) {
      return false
   } else if (uploadingFile.value) {
      return false
   } else if (isDelImg.value) {
      return false
   } else {
      return true
   }
})

const downloadData = ref({})
let querySnapshot //?Чому виніс за межі функції???
/**
 * Завантажує дані з клекції 'collectionName'firebase, та
 * зберігає їх в масив 'arreyForSave'
 * @param arreyForSave - масив для збереження даниx.
 * @param collectionName - назва колекції, з якої зкачуються дані.
 */
async function getOllDoc() {
   try {
      querySnapshot = await getDocs(collection(db, props.name))
      if (!querySnapshot.empty) {
         querySnapshot.forEach((doc) => {
            downloadData.value = doc.data()
            if (doc.data().downloadUrl) {
               srcImg.value = doc.data().downloadUrl
            }
            if (doc.data().whichBanner) {
               whichThroughBanner.value = doc.data().whichBanner
            }
            if (doc.data().selectingColor) {
               selectingColor.value = doc.data().selectingColor
            }
         })
      }
   } catch (error) {
      console.log(error)
   }
}
const isDelImg = ref(null)
watch(srcImg, (newValue, oldValue) => {
   if (newValue == null && newValue != oldValue) {
      isDelImg.value = true
   }
})

watch(whichThroughBanner, (newValue) => {
   if (downloadData.value.whichBanner != newValue) {
      dataForUpload.value.whichBanner = newValue
   } else if (dataForUpload.value.whichBanner && downloadData.value.whichBanner == newValue) {
      delete dataForUpload.value.whichBanner
   }
})

watch(selectingColor, (newValue) => {
   if (downloadData.value.selectingColor != newValue) {
      dataForUpload.value.selectingColor = newValue
   } else if (dataForUpload.value.selectingColor && downloadData.value.selectingColor == newValue) {
      delete dataForUpload.value.selectingColor
   }
})

/**
 * Додає файли до  'uploadingFile'
 */
function handleFileUpload(files) {
   for (const file of files) {
      srcImg.value = URL.createObjectURL(file)
      uploadingFile.value = file
   }
}

async function saveChange() {
   try {
      new Promise((resolve, reject) => {
         loading.value = true
         if (uploadingFile.value == null && isDelImg.value) {
            delStorageFile(downloadData.value.fullPath)
               .then(() => {
                  const cityRef = doc(db, props.name, 'main')
                  updateDoc(cityRef, {
                     fullPath: deleteField(),
                     downloadUrl: deleteField()
                  })
               })
               .then(() => {
                  delete downloadData.value.fullPath
                  delete downloadData.value.downloadUrl
                  console.log(downloadData.value)
                  isDelImg.value = null
                  resolve()
               })
               .catch((e) => {
                  console.log(e)
                  reject()
               })
         } else if (uploadingFile.value) {
            uploadFile(uploadingFile.value, 'banners/' + props.name + '/')
               .then(
                  (response) => {
                     if (downloadData.value.fullPath) {
                        delStorageFile(downloadData.value.fullPath)
                     }
                     return response
                  },
                  (e) => console.log(e)
               )
               .then(
                  (response) => {
                     dataForUpload.value.downloadUrl = response.downloadUrl
                     dataForUpload.value.fullPath = response.metadata.fullPath
                     resolve()
                  },
                  (e) => console.log(e)
               )
               .catch((e) => {
                  console.log(e)
                  reject()
               })
         } else {
            resolve()
            reject()
         }
      }).then(() => {
         if (Object.keys(dataForUpload.value).length) {
            setDoc(doc(db, props.name, 'main'), dataForUpload.value, { merge: true })
            uploadingFile.value = null
            Object.keys(dataForUpload.value).forEach((key) => {
               downloadData.value[key] = dataForUpload.value[key]
               delete dataForUpload.value[key]
            })
         }
         loading.value = false
         uploadModal.addMessage('Наскрізний банер на задньому фоні', false)
      })
   } catch (error) {
      loading.value = false
      uploadModal.addMessage(props.name, true)
      console.log('Наскрізний банер на задньому фоні' + error)
   }
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

   &__adding-section {
   }

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

   &__del-photo-btn {
   }

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

   &__del-color-btn {
   }

   &__saving-button-box {
   }

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
