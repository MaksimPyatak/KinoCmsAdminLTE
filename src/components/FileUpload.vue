<template>
   <div class="file-upload">
      <label>
         <input class="input-file" ref="file" v-on:change="handleFileUpload()" type="file" :multiple="props.multiple">
         <span>Додати файл</span>
      </label>
   </div>
</template>

<script setup>
import { ref } from "vue"

const file = ref(null)
const props = defineProps({
   multiple: Boolean,
})
const emit = defineEmits(['uploadedFiles'])
const handleFileUpload = async () => {
   emit("uploadedFiles", file.value.files);
}
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
   transition: all .3s;
}

.file-upload input[type="file"] {
   display: none
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
   cursor: pointer
}
</style>