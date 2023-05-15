<template>
   <button class="button" :disabled="props.disabled" ref="button" :style="{ width: widthBtn }">
      <div v-if="!props.loading" class="button__text">
         <slot></slot>
      </div>
      <div v-else class="button__loading">
         <img src="../assets/img/loading.gif" alt="">
      </div>
   </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
   disabled: {
      type: Boolean,
      default: false
   },
   loading: {
      type: Boolean,
      default: false
   }
})
let widthBtn;
const button = ref(null)
function howWidthBtn() {
   widthBtn = getComputedStyle(button.value).width
   console.log(widthBtn);
}
onMounted(() => {
   howWidthBtn()
})
</script>

<style lang="scss" scoped>
.button {
   width: max-content;
   //width: 250px;
   height: 40px;
   background: #007bff;
   border-radius: 3px;
   padding: 10px 24px;
   color: #fff;
   font-weight: 700;
   text-align: center;

   &:disabled {
      opacity: 0.5;
   }

   &:hover {
      background: lighten(#007bff, 5%);
      transition: all .3s;
   }

   &__text {
      font-size: 14px;
   }

   &__loading {
      height: 100%;

      img {
         height: 100%;
         vertical-align: baseline;
      }
   }
}
</style>