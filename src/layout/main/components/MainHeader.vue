<template>
   <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav ml-auto main-header__my-office">
         <!-- My Office -->
         <li class="nav-item main-header__my-office">
            <a class="nav-link main-header__avatar-link" data-toggle="dropdown" href="#">
               <img class="main-header__avatar" src="../img/avatar.svg" alt="">
               <h3>Адміністратор</h3>
            </a>

         </li>
         <!-- Exit -->
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