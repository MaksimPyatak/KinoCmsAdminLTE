<template>
   <nav class="main-header navbar navbar-expand navbar-dark navbar-light">

      <ul class="navbar-nav">
         <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
         </li>
      </ul>
      <ul class="navbar-nav ml-auto main-header__my-office">
         <li class="nav-item main-header__my-office">
            <a class="nav-link main-header__avatar-link" data-toggle="dropdown" href="#">
               <img class="main-header__avatar" src="../img/avatar.svg" alt="">
               <h3>Адміністратор</h3>
            </a>

         </li>
         <li class="nav-item main-header__exit">
            <a class="nav-link" data-toggle="dropdown" href="#">
               <img class="main-header__avatar" src="../img/exit.svg" alt="">
            </a>
         </li>
      </ul>
   </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-header {
   height: 59.75px;

   &__my-office {
      height: 35px;
   }

   &__avatar-link {
      height: 100%;
      margin-right: 20px;
      display: flex;
      align-items: center;
   }

   &__avatar {
      height: 100%;
      padding-right: 10px;
      object-fit: cover;
   }
}
</style>