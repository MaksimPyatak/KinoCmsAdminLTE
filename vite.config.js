import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/KinoCmsAdminLTE/',
   plugins: [vue()],
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      }
   },
   // Імпортує файли SCSS для доступу до міксинів. Можливо і для отримання інших можливостей SCSS
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: ` // just variables loaded globally
           @import "./src/app/styles/mixins";
           `
         }
      }
   }
})
