<template>
   <GeneralCard>
      <template #title>
         {{ props.nameBanners }}
      </template>
      <template #label>
         <ToggleCheckbox
            :value="showingBlock"
            @inputValue="changeShowingBlock"
         />
      </template>
      <template #body>
         <div class="banner__main-block">
            <ImageCard
               v-for="item in dataForShow"
               :key="item.id"
               :id="item.id"
               :src="item.downloadUrl"
               :url="item.url"
               :fullPath="item.fullPath"
               :text="item.text"
               ratio="19%"
               @updatUrl="updatUrl"
               @updateText="updateText"
               @close="delImgCard"
            >
            </ImageCard>
            <FileUpload
               :multiple="true"
               @uploadedFiles="handleFileUpload"
            />
         </div>
      </template>
      <template #footer>
         <CastomSelect
            v-model="sliderSpeed"
            :selectText="topSelectText"
         >
            Швидкість зміни слайдів
         </CastomSelect>
         <CastomButton
            class="banner__saving-button"
            @click="saveChange"
            :disabled="isDisabledBtnSave"
            :loading="loading"
         >
            <span>Зберегти</span>
         </CastomButton>
      </template>
   </GeneralCard>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db, saveNewData, addDataToFirebase } from '@/firebase/index.js'
import { getOrigId, updatObjectValue, delCard } from '@/helpers/dataHandler.js'
import GeneralCard from '@/components/GeneralCard.vue'
import ToggleCheckbox from '@/components/ToggleCheckbox.vue'
import ImageCard from '@/components/ImageCard.vue'
import CastomSelect from '@/components/CastomSelect.vue'
import FileUpload from '@/components/FileUpload.vue'
import CastomButton from '@/components/CastomButton.vue'
import { useUploadModalStore } from '@/stores/uploadModal.js'

const emit = defineEmits(['goingLoading'])

const uploadModal = useUploadModalStore()

const props = defineProps({
   name: {
      type: String,
      required: true
   },
   folderForSaveFile: {
      type: String,
      required: true
   },
   nameBanners: {
      type: String,
      required: ''
   }
})

const showingBlock = ref(true)
const downloadedShowingBlock = ref(true)
const isChangingShowingBlock = computed(() =>
   showingBlock.value == downloadedShowingBlock.value ? false : true
)

const loading = ref(false)
watch(loading, (newValue) => {
   emit('goingLoading', newValue)
})
onMounted(() => {
   getOllDoc(props.name, dataForShow.value)
})

/**
 * Завантажує дані з клекції 'collectionName'firebase, та
 * зберігає їх в масив 'arreyForSave'
 * @param arreyForSave - масив для збереження даниз.
 * @param collectionName - назва колекції, з якої зкачуються дані.
 */
async function getOllDoc(collectionName, arreyForSave) {
   const querySnapshot = await getDocs(collection(db, collectionName))
   querySnapshot.forEach((doc) => {
      if (doc.id != 'showingBlock' && doc.id != 'sliderSpeed') {
         arreyForSave.push(doc.data())
      } else if (doc.id == 'showingBlock') {
         showingBlock.value = doc.data().show
         downloadedShowingBlock.value = doc.data().show
      } else if (doc.id == 'sliderSpeed') {
         sliderSpeed.value = doc.data().speed
         downloadedSliderSpeed.value = doc.data().speed
      }
   })
}

async function saveChange() {
   try {
      new Promise((resolve, reject) => {
         loading.value = true
         if (Object.keys(dataForUpload.value).length || Object.keys(dataForDel.value).length) {
            new Promise((resolve, reject) => {
               saveNewData(
                  dataForUpload.value,
                  props.name,
                  dataForDel.value,
                  props.folderForSaveFile + '/' + props.name + '/',
                  dataForShow.value
               ).then(() => {
                  resolve()
                  reject()
               })
            }).then(
               () => resolve(),
               () => reject()
            )
         } else {
            resolve()
            reject()
         }
      })
         .catch((e) => console.log(e))
         .then(
            () => {
               if (isChangingShowingBlock.value) {
                  addDataToFirebase('showingBlock', props.name, 'show', showingBlock.value, false)
                  downloadedShowingBlock.value = showingBlock.value
               }
            },
            (e) => {
               console.log(e)
            }
         )
         .then(
            () => {
               if (isChangingSliderSpeed.value) {
                  addDataToFirebase('sliderSpeed', props.name, 'speed', sliderSpeed.value, false)
                  downloadedSliderSpeed.value = sliderSpeed.value
               }
            },
            (e) => {
               console.log(e)
               uploadModal.addMessage(props.nameBanners, true, e)
            }
         )
         .then(
            () => {
               console.log('e')
               loading.value = false
               console.log(loading.value)
               uploadModal.addMessage(props.nameBanners, false)
            },
            (e) => console.log(e)
         )
   } catch (error) {
      loading.value = false
      uploadModal.addMessage(props.nameBanners, true)
      console.log(props.nameBanners + error)
   }
}

function updatUrl(id, value) {
   updatObjectValue(dataForUpload.value, id, 'url', value)
   //console.log(dataForUpload.value);
}
function updateText(id, value) {
   updatObjectValue(dataForUpload.value, id, 'text', value)
}

function changeShowingBlock(value) {
   showingBlock.value = value
}

const dataForUpload = ref([])
const dataForShow = ref([])
/**
 * Додає файли до масиву 'dataForUpload'
 */
function handleFileUpload(files) {
   for (const item of files) {
      let id = getOrigId()
      let objItem = {
         id: id,
         image: item
      }
      let objItemForShow = {
         id: id,
         downloadUrl: URL.createObjectURL(item)
      }
      dataForUpload.value.push(objItem)
      dataForShow.value.push(objItemForShow)
      //console.log(dataForShow.value);
      //console.log(dataForUpload.value);
   }
}

const dataForDel = ref([])
function delImgCard(id, fullPath) {
   delCard(id, dataForShow.value, dataForUpload.value, props.name, dataForDel.value, fullPath)
}

const isDisabledBtnSave = computed(() => {
   if (Object.keys(dataForUpload.value).length > 0) {
      console.log(1)
      return false
   } else if (Object.keys(dataForDel.value).length) {
      console.log(1)
      return false
   } else if (isChangingShowingBlock.value) {
      console.log(showingBlock.value)
      console.log(downloadedShowingBlock.value)
      return false
   } else if (isChangingSliderSpeed.value) {
      console.log(1)
      return false
   } else {
      return true
   }
})
const topSelectText = [5, 10, 15]
const sliderSpeed = ref('5')
const downloadedSliderSpeed = ref('5')
const isChangingSliderSpeed = computed(() =>
   sliderSpeed.value == downloadedSliderSpeed.value ? false : true
)
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
