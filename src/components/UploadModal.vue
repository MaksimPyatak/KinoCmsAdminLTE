<template>
   <div
      class="info-box"
      :class="modalColor"
   >
      <span class="info-box-icon"><i class="far fa-copy"></i></span>
      <div class="info-box-content">
         <span class="info-box-text">{{ props.componentsName }}</span>
         <span class="info-box-number">{{ message }}</span>
      </div>
   </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
   componentsName: {
      type: String
   },
   isError: {
      type: Boolean,
      default: false
   },
   error: {
      type: String,
      default: 'Помилка завантаження'
   }
})

const modalColor = computed(() => {
   if (props.isError) {
      return 'bg-danger'
   } else {
      return 'bg-success'
   }
})
const message = computed(() => (props.isError ? props.error : 'Завантаження успішне'))
</script>

<style lang="scss" scoped></style>
