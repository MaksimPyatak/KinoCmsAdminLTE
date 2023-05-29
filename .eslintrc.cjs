/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
   root: true,
   'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-prettier/skip-formatting'
   ],
   parserOptions: {
      ecmaVersion: 'latest'
   },
   rules: {
      // інші правила
      'vue/max-attributes-per-line': ['error', {
         singleline: 1, // Максимальна кількість атрибутів у одному рядку
         multiline: {
            max: 1, // Максимальна кількість атрибутів у мультирядковому режимі


            allowFirstLine: true // Вимагати перенесення першого атрибута на новий рядок
         }
      }],
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': ['error', 3, {
         attribute: 1, // Розміщення атрибутів
         baseIndent: 1, // Базовий відступ
         closeBracket: 0, // Розміщення закриваючого тегу
         alignAttributesVertically: true // Вирівнювання атрибутів вертикально
      }]
   },

   //'vue/html-closing-bracket-newline': ['error', {
   //   //singleline: 'never', // Закриваючий тег у однорядковому вигляді
   //   multiline: 'always' // Закриваючий тег у мультирядковому вигляді
   //}],


}


