<template>
   <div>
      <form @submit="onSubmit">
         <button
            @click="changeLang"
            type="button"
         >
            Change lang
         </button>
         <h4>{{ activeLang }}</h4>
         <br />
         <label :for="activeLang == 'en' ? 'text1' : 'text2'"
            >{{ activeLang == 'en' ? 'Text1' : 'Text2' }}
         </label>
         <br />
         <Field
            v-model="allInput[activeLang]"
            v-if="activeLang == 'en'"
            type="text1"
            name="entext"
            id="text"
         />
         <Field
            v-model="allInput[activeLang]"
            v-else-if="activeLang == 'uk'"
            type="text2"
            name="uktext"
            id="text"
         />
         <br />
         <ErrorMessage name="entext" />
         <br />
         <ErrorMessage name="uktext" />
         <br />
         {{ allInput }}
         <br />
         <button type="submit">Submit</button>
      </form>
   </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import * as Yup from 'yup'
import { useForm, ErrorMessage, Field } from 'vee-validate'

const lang = ref(['en', 'uk'])
const activeLang = ref('en')
function changeLang() {
   activeLang.value == 'en' ? (activeLang.value = 'uk') : (activeLang.value = 'en')
}
const allInput = ref({})

const baseSchema = Yup.string().required()
const schema = computed(() => {
   let schema = {}
   lang.value.forEach((e) => {
      schema[e + 'text'] = Yup.string().required()
   })
   return Yup.object(schema)
})
const x = ref()
const { handleSubmit } = useForm({
   validationSchema: schema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true
})
function onInvalidSubmit({ values, errors, results }) {
   console.log(values) // current form values
   console.log(errors) // a map of field names and their first error message
   console.log(results) // a detailed map of field names and their validation results
}
const onSubmit = handleSubmit((dataForm) => {
   console.log(dataForm)
}, onInvalidSubmit)
</script>

<style lang="scss" scoped></style>
