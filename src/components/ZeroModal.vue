<template>
   <div class="modal">
      <div class="modal__box">
         <h1>ЗАЧЕКАЙТЕ, <br />ІДЕ ЗАВАНТАЖЕННЯ</h1>
      </div>
   </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.modal {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   z-index: 999;
   display: flex;
   justify-content: center;
   align-items: center;

   &__box {
      color: white;
      text-align: center;
      //position: relative;
      //max-width: 867px;
      //width: 100%;
      //margin: 84px;
      //aspect-ratio: 16 / 9;
      //@media (max-width: 766px) {
      //   margin: 50px 24px 24px;
      //}
      //@media (max-width: 600px) {
      //}
   }
}
</style>