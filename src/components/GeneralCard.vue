<template>
   <div class="card card-primary">
      <div class="card-header ">
         <h3 class="card-title">
            <slot name="title"></slot>
         </h3>
         <div class="card-tools ">
            <span class="badge badge-primary">
               <slot name="label"></slot>
            </span>
         </div>
      </div>
      <div class="card-body">
         <slot name="body"></slot>
      </div>
      <!-- /.card-body -->
      <!--<div class="card-footer">
         The footer of the card
      </div>-->
      <!-- /.card-footer -->
   </div>
   <!-- /.card -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card-title {
   font-size: 2.5em;
   //margin-top: 0.83em;
   //margin-bottom: 0.83em;
   //margin-left: 0;
   //margin-right: 0;
   font-weight: bold;
}

.card-header {
   display: flex;
}

.card-title {
   flex: 1 1 auto;
   display: flex;
   justify-content: center;
}
</style>