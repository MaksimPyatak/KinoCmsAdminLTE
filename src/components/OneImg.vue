<template>
   <div class="one-img__photo-box">
      <div
         v-if="srcImg"
         class="one-img__img-box"
      >
         <div class="one-img__img">
            <img :src="srcImg" />
         </div>
      </div>
      <FileUpload
         class="one-img__upload"
         :multiple="false"
         @uploadedFiles="transferFile"
      />
      <CastomButton
         v-if="srcImg"
         class="one-img__del-photo-btn"
         @click="deleteImg"
      >
         Видалити
      </CastomButton>
   </div>
</template>

<script setup>
import CastomButton from '@/components/CastomButton.vue'
import FileUpload from '@/components/FileUpload.vue'

const emit = defineEmits(['transferFile'])
const transferFile = async (file) => {
   console.log(file)
   emit('transferFile', file)
}
</script>

<style lang="scss" scoped>
.one-img {
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
}
</style>
