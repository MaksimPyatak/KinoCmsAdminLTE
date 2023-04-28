<template>
   <li class="nav-item has-treeview ">
      <RouterLink :to="link" class="nav-link" :class="{ active: isActive() }">
         <i class="nav-icon fas" :class="icon"></i>
         <p>
            <slot />
         </p>
      </RouterLink>
   </li>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
   icon: {
      type: String,
      default: null
   },
   link: {
      type: String,
      default: null
   }
});

const route = useRoute()
function isActive() {
   return route.path === props.link
}
</script>

<style lang="scss" scoped></style>