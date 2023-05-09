<template>
   <div class="select">
      <label for="select" class="select__label-select">
         <slot></slot>
      </label>
      <select class="select__body" name="select" :value="props.modelValue"
         @input="$emit('update:modelValue', $event.target.value)">
         <option v-for="option in options" :value="option.value" :key="option.value">
            {{ option.text }}
         </option>
         <!--<option value="5" selected>5</option>
         <option value="10">10</option>
         <option value="15">15</option>-->
      </select>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(['modelValue', 'selectText', 'selectValue'])
defineEmits(['update:modelValue'])
const options = ref([
])
//function addOptions(params) {

//}
function getOptions() {
   const valueText = props.selectValue !== undefined ? props.selectValue : props.selectText;
   for (let i = 0; i < props.selectText.length; i++) {
      options.value.push({ 'value': props.selectText[i], 'text': valueText[i] });
   }
}
onMounted(() => {
   getOptions();
})
</script>

<style lang="scss" scoped>
.select__label-select {
   margin-right: 10px;
}
</style>