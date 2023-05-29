<template>
   <div class="file-upload">
      <label>
         <input
            name="file"
            class="input-file"
            ref="file"
            v-on:change="handleFileUpload()"
            type="file"
            :multiple="props.multiple"
         />
         <span>Додати файл</span>
      </label>
   </div>
</template>

<script setup>
import { ref } from 'vue'
//import { useField } from "vee-validate";
//import * as Yup from 'yup';

const file = ref(null)
const props = defineProps({
   multiple: Boolean
})
const emit = defineEmits(['uploadedFiles'])
const handleFileUpload = async () => {
   console.log(file.value.files)
   emit('uploadedFiles', file.value.files)
}
//const schema = Yup.object().shape({
//   file: Yup.mixed().required('File is required'),
//})
//const {
//   value: inputValue,
//   errorMessage,
//   handleBlur,
//   handleChange,
//   meta,
//} = useField('file', schema,);
</script>

<style lang="scss" scoped>
.file-upload {
   position: relative;
   /* Даем возможность делать позиционирование, внутри данного элемента */
   overflow: hidden;
   /* Все что выходит за пределы - скрываем */
   width: 100px;
   /* Задаем ширину кнопки выбора файла */
   height: 100px;
   /* Задаем высоту кнопки выбора файла */
   background: #007bff;
   border-radius: 3px;
   padding: 8px 4px;
   color: #fff;
   text-align: center;
}

.file-upload:hover {
   background: lighten(#007bff, 5%);
   transition: all 0.3s;
}

.file-upload input[type='file'] {
   display: none;
   /* Обязательно скрываем настоящий Input File */
}

.file-upload label {
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   padding: 10px;
   cursor: pointer;
}
</style>
