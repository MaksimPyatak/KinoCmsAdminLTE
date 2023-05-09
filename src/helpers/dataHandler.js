export function getOrigId() {
   return Date.now() + Math.random().toString(36).substring(10);
}

/**
* Додає властивості до обєкту в масиві'arreyForUpload'що 
* має властивість id і яка рівна 'id' що передається
* @param arreyForUpload - масив з файлом для збереження.
* @param id - значення властивості id в обєкті з яким
* потрібно внести зміни.
* @param dataName - ключ властивості обєкта.
* @param value - значення властивості обєкта.
*/
export function updatObjectValue(arreyForUpload, id, dataName, value) {
   for (const item of arreyForUpload) {
      if (item.id == id) {
         item[dataName] = value;
      }
   }
}
//export {getOrigId, updatObjectValue}