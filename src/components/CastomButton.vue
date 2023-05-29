<template>
   <button
      class="button"
      :disabled="disabledBtn"
      ref="button"
      :style="{ width: widthBtn, cursor: cursorView }"
      :type="props.type"
   >
      <div
         v-if="!props.loading"
         class="button__text"
      >
         <slot></slot>
      </div>
      <div
         v-else
         class="button__loading"
      >
         <img
            src="../assets/img/loading.gif"
            alt=""
         />
      </div>
   </button>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
const props = defineProps({
   disabled: {
      type: Boolean,
      default: false
   },
   loading: {
      type: Boolean,
      default: false
   },
   type: {
      type: String
   }
})

const disabledBtn = computed(() => (props.loading ? true : props.disabled))
let widthBtn
const button = ref(null)
function howWidthBtn() {
   widthBtn = getComputedStyle(button.value).width
}
const cursorView = computed(() => {
   if (props.loading) {
      return 'wait'
   } else if (props.disabled) {
      return 'no-drop'
   } else {
      return 'pointer'
   }
})
onMounted(() => {
   howWidthBtn()
})
</script>

<style lang="scss" scoped>
.button {
   width: max-content;
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
      transition: all 0.3s;
   }

   &__text {
      font-size: 14px;
   }

   &__loading {
      height: 100%;
      cursor: default;

      img {
         height: 100%;
         vertical-align: baseline;
      }
   }
}
</style>
