<template>
   <div class="close">
      <div class="close__criss-cross"></div>
   </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.close {
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: 3px solid #000;
   background: #fff;
   opacity: 0.5;
   z-index: 1;
   transition: opacity ease 0.5s;
   cursor: pointer;

   &__criss-cross {
      width: 24px;
      height: 24px;

      &:hover {
         opacity: 1;
      }
   }

   &__criss-cross::before,
   &__criss-cross::after {
      content: '';
      position: absolute;
      top: 10px;
      display: block;
      width: 24px;
      height: 3px;
      background: #000;
   }

   &__criss-cross::before {
      transform: rotate(45deg);
   }

   &__criss-cross::after {
      transform: rotate(-45deg);
   }
}
</style>