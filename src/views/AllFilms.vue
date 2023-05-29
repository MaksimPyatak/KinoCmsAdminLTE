<template>
   <div
      class="all-films"
      @click="this.$router.push('/film')"
   >
      <CastomButton
         class="all-films__adding-film"
         @click="addFilm"
      >
         <!--<RouterLink :to="'/film'" class="all-films__nav-link">-->
         <p>Додафти фільм</p>
         <!--</RouterLink>-->
      </CastomButton>
   </div>
</template>

<script setup>
import CastomButton from '@/components/CastomButton.vue'
</script>

color: #fff;
<style lang="scss" scoped>
.all-films {
   &__adding-film {
   }

   &__nav-link {
      color: #fff;
   }
}
</style>
