<template>
   <ZeroModal v-if="loading" />
   <UniversalBanner :name="NAME_TOP_BANNERS.name" :folderForSaveFile="NAME_TOP_BANNERS.folderForSaveFile"
      :nameBanners="NAME_TOP_BANNERS.nameBanners" @goingLoading="goingLoading" />
   <ThroughBanner :name="NAME_BACKGROUND_BANNERS" @goingLoading="goingLoading" />
   <UniversalBanner :name="INFO_NEWS_BANNERS.name" :folderForSaveFile="INFO_NEWS_BANNERS.folderForSaveFile"
      :nameBanners="INFO_NEWS_BANNERS.nameBanners" @goingLoading="goingLoading" />
</template>

<script setup>
import { ref } from "vue";
import ThroughBanner from '../components/banersPage/ThroughBanner.vue'
import ZeroModal from '../components/ZeroModal.vue'
import UniversalBanner from "../components/banersPage/UniversalBanner.vue";

const loading = ref(false)
function goingLoading(params) {
   loading.value = params
}

const NAME_TOP_BANNERS = {
   name: 'topBanner',
   folderForSaveFile: 'banners',
   nameBanners: 'На головній верх'
}
const NAME_BACKGROUND_BANNERS = 'backgroundBanner'
const INFO_NEWS_BANNERS = {
   name: 'newsBanners',
   folderForSaveFile: 'banners',
   nameBanners: 'На головній новини та акції'
}
</script>

<style lang="scss" scoped></style>