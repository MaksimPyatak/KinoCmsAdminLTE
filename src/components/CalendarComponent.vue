<template>
   <DatePicker
      v-model="date"
      :popover="false"
   >
      <template #default="{ togglePopover, inputValue, inputEvents }">
         <label>Дата прем'єри</label>
         <div
            class="block flex rounded-lg dark:border-gray-600 overflow-hidden"
            :class="{ focus: focus }"
         >
            <button
               type="button"
               class="flex justify-center items-center px-2 bg-accent-100 text-accent-700 border-rdark:bg-gray-700 dark:text-accent-300"
               @click="() => togglePopover()"
            >
               <i
                  class="far fa-calendar"
                  aria-hidden="true"
               ></i>
               <!--<IconCalendar class="w-5 h-5" />-->
            </button>
            <input
               :value="inputValue"
               v-on="inputEvents"
               @focus="focus = true"
               @blur="focus = false"
               @input="$emit('update:inputValue', $event.target.value)"
               class="flex-grow px-2 py-1 bg-accent-100 dark:bg-gray-700"
            />
         </div>
      </template>
   </DatePicker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

defineProps(['inputValue'])
defineEmits(['update:inputValue'])
const focus = ref(false)
const date = ref(new Date())
</script>
<style lang="scss" scoped>
.block {
   border-radius: 5px;
   border: 2px solid transparent;
   padding: 5px 10px;
   outline: none;
   background-color: #f2f5f7;
   margin-bottom: calc(1em * 1.5);

   &.focus {
      border-color: var(--primary-color);
   }

   input {
      border-radius: 5px;
      border: 2px solid transparent;
      padding: 5px 10px;
      outline: none;
      background-color: #f2f5f7;
      width: 90%;
      transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
         background-color 0.3s ease-in-out;
   }
}
</style>
