export function dateNow() {
   const today = new Date()

   const day = today.getDate() // Отримати день
   const month = () => {
      let month = today.getMonth() + 1
      month = month.toString().padStart(2, '0')
      return month
   } // Отримати місяць (починаючи з 0, тому додаємо 1)
   const year = today.getFullYear() // Отримати рік

   return `${day}.${month()}.${year}`
}
