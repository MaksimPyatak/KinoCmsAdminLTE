import { delCardInDoc } from "../firebase/index.js";

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
   let i = 0;
   for (const item of arreyForUpload) {
      if (item.id == id) {
         item[dataName] = value;
      } else {
         i++
         console.log(i);
      }
   }
   if (arreyForUpload.length == i) {
      console.log(i);
      arreyForUpload.push({
         [dataName]: value,
         id: id
      });

   }
}

export function delCard(id, arreyForShow, arreyForUpload, collection, arreyForDel, fullPath) {
   let i = 0;
   let iForUp = 0;
   let iter = 0;
   for (const item of arreyForShow) {
      if (item.id == id) {
         arreyForShow.splice(i, 1)
         break
      }
      i++
   }
   for (const item of arreyForUpload) {
      iter++
      if (item.id == id) {
         arreyForUpload.splice(iForUp, 1)
         break
      }
      iForUp++
   }
   if (iter == arreyForUpload.length) {
      arreyForDel.push({ nameColl: id, coll: collection, fullPath: fullPath })
   }
}
//export {getOrigId, updatObjectValue}