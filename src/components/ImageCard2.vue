<template>
   <div class="card">
      <div class="card__body">
         <ClosingCard
            class="card__close"
            @click="$emit('close')"
         />
         <div class="card__img-box">
            <div class="card__img">
               <img :src="imgSrc" />
            </div>
         </div>
         <CastomInput
            v-model="valueUrl"
            class="card__input-box"
            name="url"
            type="url"
            label="URL:"
            placeholder="URL"
         />
         <CastomInput
            v-model="valueText"
            class="card__input-box"
            name="text"
            type="text"
            label="Текст:"
            placeholder="Текст"
         />
      </div>
   </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import CastomInput from '../components/CastomInput.vue'
import ClosingCard from './ClosingCard.vue'

const props = defineProps({
   id: String,
   img: File,
   ratio: String
})

const emit = defineEmits(['updatUrl', 'updateText', 'close'])
const imgSrc = URL.createObjectURL(props.img)
const valueUrl = ref('')
const valueText = ref('')
watch(valueUrl, (newValue) => {
   emit('updatUrl', props.id, newValue)
})

watch(valueText, (newValue) => {
   emit('updateText', props.id, newValue)
})
</script>

<style lang="scss" scoped>
.card {
   width: 250px;
   padding-bottom: 10px;
   position: relative;

   &__close {
      position: absolute;
      top: -12px;
      right: -12px;
   }

   &__input-box {
      margin: 20px 10px 0;
   }

   &__img-box {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   &__img {
      padding-top: v-bind('props.ratio'); //19%
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
}

:deep(.text-input) {
   display: grid;
   grid-template-columns: 1fr 4fr;
   align-items: center;
}
</style>
