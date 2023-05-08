import { db } from '../firebase/index.js'
import { doc, setDoc } from "firebase/firestore"
/*
* Створює документ або додає/об'єднує дані до/в нього/ньому
* @param id - унікальний ідентифікатор або назва документа.
* @param name - ключ поля.
* @param value - значення поля.
* @param collectionName - назва колекції, куди додаються дані.
* @param isMerge - значення параметра isMerge метода setDoc.
**/
export async function addDataToFirebase(id, collectionName, name, value, isMerge) {
   await setDoc(doc(db, collectionName, id), {
      [name]: value
   }, { merge: isMerge })
}