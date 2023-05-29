<template>
   <GeneralCard class="film">
      <template #title>
         <h1>Film</h1>
         <!--{{ props }}-->
      </template>
      <template #label>
         <div
            v-if="!validTabs"
            class="film__error-tab"
         >
            Заповніть правильно поля форми
         </div>
         <LanguageTabs
            :selectedLang="leng"
            @passLeng="addLeng"
         />
      </template>

      <template #body>
         <form
            @submit="onSubmit"
            @invalid-submit="onInvalidSubmit"
         >
            <template v-for="keyLeng in Object.keys(getLengs())">
               <CastomInput
                  v-if="keyLeng == leng"
                  v-model="film[leng]['name']"
                  class="film__input-name-film"
                  :name="leng + 'NameFilm'"
                  type="text"
                  label="Назва фільму"
                  placeholder="Назва фільму"
               />
            </template>

            <!--v-show="leng == 'en'"-->
            <!--<CastomInput
               v-show="leng == 'uk'"
               v-model="film[leng].name"
               class="film__input-name-film"
               name="nameFilm"
               type="text"
               label="Назва фільму"
               placeholder="Назва фільму"
            />-->

            <CalendarComponent v-model="film.premierDate" />

            <template v-for="keyLeng in Object.keys(getLengs())">
               <CastomTextarea
                  v-if="keyLeng == leng"
                  v-model="film[leng]['description']"
                  :name="leng + 'Description'"
                  type="text"
                  label="Опис"
                  placeholder="Опис"
               />
            </template>
            <!--<OneImg @transferFile="test" />-->
            <template v-for="keyLeng in Object.keys(getLengs())">
               <CastomInput
                  v-if="keyLeng == leng"
                  v-model="film[leng]['trellerUrl']"
                  class="film__input-box"
                  :name="leng + 'UrlTreler'"
                  type="url"
                  label="Посилання на трейлер"
                  placeholder="Посилання на трейлер"
               />
            </template>

            {{ film }}

            <div
               v-if="errorEn && leng != 'en'"
               class="film__error-en"
            >
               Заповніть англійську вкладку
            </div>
            {{ isSubmitting }}
            <CastomButton
               class="film__saving-button"
               type="submit"
               :disabled="isSubmitting"
            >
               <!--:disabled="isDisabledBtnSave" :loading="loading"-->
               <span>Зберегти</span>
            </CastomButton>
         </form>
      </template>
      <template #footer> </template>
   </GeneralCard>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import * as Yup from 'yup'
import { useForm } from 'vee-validate'
import GeneralCard from '../components/GeneralCard.vue'
import LanguageTabs from '../components/LanguageTabs.vue'
import CastomButton from '../components/CastomButton.vue'
import CastomInput from '../components/CastomInput.vue'
import CalendarComponent from '../components/CalendarComponent.vue'
import CastomTextarea from '../components/CastomTextarea.vue'
import OneImg from '../components/OneImg.vue'
import { getLengs } from '@/shared/language.js' //?????

onBeforeMount(() => {
   addLengs()
})
const isValid = computed(() => {
   return meta.value.valid
})

function addLengs() {
   for (const key of Object.keys(getLengs())) {
      film.value[key] = {}
   }
}

const leng = ref('uk') //При підттягуванні можливих значень локалей з 'getLengs' вибрати початкове значення з повернутого масиву з 'getLengs'
const selectEn = ref(false)
const notValidTabs = ref(false)
const validTabs = computed(() => {
   if (notValidTabs.value == true && meta.value.valid == false) {
      return false
   }
   return true
})
async function addLeng(local) {
   leng.value = local
   //const { valid } = await validate();
   //if (meta.value.valid) {
   //   leng.value = local
   //   notValidTabs.value = false
   //   if (local == 'en') {
   //      selectEn.value = true
   //   }
   //} else {
   //   notValidTabs.value = true
   //}
}

const film = ref({
   id: '',
   premierDate: new Date(),
   filmType: {
      '3d': false,
      '2d': false,
      imax: false
   }
   //en: {
   //   name: '',
   //   description: '',
   //   mainPage: {
   //      download: '',
   //      fullpath: ''
   //   },
   //   galleryPage: {},
   //   trellerUrl: '',
   //   seoBloc: {}
   //},
   //uk: {
   //   name: '',
   //   description: '',
   //   mainPage: {
   //      download: '',
   //      fullpath: ''
   //   },
   //   galleryPage: {},
   //   trellerUrl: '',
   //   seoBloc: {}
   //}
})

const baseSchema = {
   NameFilm: Yup.string().required(),
   Description: Yup.string().required(),
   UrlTreler: Yup.string().url().required()
}
const schema = computed(() => {
   let schema = {}
   Object.keys(getLengs()).forEach((e) => {
      for (const keyRule in baseSchema) {
         if (Object.hasOwnProperty.call(baseSchema, keyRule)) {
            //if (keyRule != 'nameFilm') {
            schema[e + keyRule] = baseSchema[keyRule]
            //}
         }
      }
      //schema[e + 'text'] = Yup.string().required()
   })
   //schema['nameFilm'] = baseSchema['nameFilm'];
   console.log(schema)
   return Yup.object(schema)
})

//const schema = Yup.object({
//   nameFilm: Yup.string().required(),
//   description: Yup.string().required(),
//   urlTrelerUk: Yup.string().url().required(),
//   urlTrelerEn: Yup.string().url().required()
//})

const { handleSubmit, validate, meta, isSubmitting } = useForm({
   validationSchema: schema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true
})
//const { valid, errors } = await validate();
const errorEn = ref(false)
function onInvalidSubmit({ values, errors, results }) {
   console.log(values) // current form values
   console.log(errors) // a map of field names and their first error message
   console.log(results) // a detailed map of field names and their validation results
}
const onSubmit = handleSubmit(() => {
   //try {
   //if (selectEn.value == true || film.value.id.length > 0) {
   //   console.log(film.value)
   //} else {
   //   errorEn.value = true
   //}
   console.log(film.value)
   //} catch (error) {
   //   console.log(error);
   //}
}, onInvalidSubmit)

//function onInvalidSubmit() {
//   const submitBtn = document.querySelector('.submit-btn')
//   submitBtn.classList.add('invalid')
//   setTimeout(() => {
//      submitBtn.classList.remove('invalid')
//   }, 1000)
//}
function saveO(params) {}
</script>

<style lang="scss" scoped>
.film {
   &__error-tab {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #00ffff;
   }

   &__tabs {
   }

   &__input-name-film {
   }

   &__description {
   }

   &__input-box {
   }

   &__error-en {
      color: red;
   }

   &__saving-button {
   }
}

//:deep(.text-input) {
//   display: grid;
//   grid-template-columns: 1fr 4fr;
//   align-items: center;
//}
</style>
