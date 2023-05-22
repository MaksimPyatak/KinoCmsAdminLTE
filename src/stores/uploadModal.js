import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getOrigId } from "../helpers/dataHandler.js";

export const useUploadModalStore = defineStore('uploadModal', () => {
   const messages = ref({})
   function addMessage(componentsName, isError) {
      const key = getOrigId();
      messages.value[key] = {
         componentsName,
         isError
      };
      setTimeout(() => {
         delete messages.value[key];
      }, 4000);
   }

   return { messages, addMessage }
})
