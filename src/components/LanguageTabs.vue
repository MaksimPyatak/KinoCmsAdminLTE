<template>
   <div class="lang-box">
      <CastomButton
         type="button"
         v-for="item in langs"
         class="lang-box__tabs"
         @click="$emit('passLeng', item.local)"
         :disabled="item.disabled"
         :key="item.local"
      >
         <span>{{ item.label }}</span>
      </CastomButton>
   </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import CastomButton from '../components/CastomButton.vue'
import { getLengs } from '../shared/language.js'

defineEmits(['passLeng'])
const props = defineProps({
   selectedLang: {
      type: String
   }
})
const selectedLang = computed(() => props.selectedLang)
watch(selectedLang, (newValue) => {
   langChoice(newValue)
})

onMounted(() => {
   Object.assign(langs.value, getLengs())
})
const langs = ref({})

function langChoice(local) {
   if (langs.value[local].disabled !== true) {
      for (const lang in langs.value) {
         if (Object.hasOwnProperty.call(langs.value, lang)) {
            langs.value[lang].disabled = false
         }
      }
      langs.value[local].disabled = true
   }
}
</script>

<style lang="scss" scoped>
.lang-box {
   position: absolute;
   bottom: -1px;
   right: 15px;

   &__tabs {
      background: #fff;
      border-radius: 3px 3px 0 0;
      color: #007bff;
      opacity: 0.8;

      &:not(:last-child) {
         margin-right: 3px;
      }
   }
}

:deep(.button) {
   background: #fff;

   &:disabled {
      opacity: 1;
      cursor: default !important;
   }

   &:hover {
      background: #fff;
      opacity: 1;
   }
}
</style>
