import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";

import { getOrigId } from "../helpers/dataHandler.js";

const firebaseConfig = {
   apiKey: "AIzaSyA05P1xTD86r4FSacfzaRiDv7hwqYFaNMo",
   authDomain: "my-kino-cms.firebaseapp.com",
   projectId: "my-kino-cms",
   storageBucket: "my-kino-cms.appspot.com",
   messagingSenderId: "18464466854",
   appId: "1:18464466854:web:6bcd7d760dcc68f2be9167",
   measurementId: "G-R936Q3ST84"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

const saveFile = async (fullPath, file) => {
   const storageRef = ref(storage, fullPath);
   const snapshort = await uploadString(storageRef, file, "data_url");
   if (snapshort) {
      const downloadUrl = await getDownloadURL(snapshort.ref)
      const metadata = await getMetadata(storageRef)
      return { downloadUrl, metadata, snapshort }
   }
}

//function getOrigId() {
//   return Date.now() + Math.random().toString(36).substring(10);
//}

const uploadFile = async (file) => {
   return await new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (e) => {
         const result = reader.result;
         const { downloadUrl, metadata, snapshort } = await saveFile('imgage/banners/' + getOrigId() + file.name, result)
         if (snapshort) {
            resolve({ downloadUrl, metadata, snapshort })
         } else {
            reject();
         }
      }
   })
}


/**
* Створює документ або додає/об'єднує дані до/в нього/ньому
* @param id - унікальний ідентифікатор або назва документа.
* @param name - ключ поля.
* @param value - значення поля.
* @param collectionName - назва колекції, куди додаються дані.
* @param isMerge - значення параметра isMerge метода setDoc.
*/
async function addDataToFirebase(id, collectionName, name, value, isMerge) {
   await setDoc(doc(db, collectionName, id), {
      [name]: value
   }, { merge: isMerge })
}

/**
* Зберігає файл з масиву 'arreyForUpload' в storege 
*firebase, а потім зберігає отриманий Url цього файлу та 
*інші дані що знаходяться в одному з файлом обєкті до 
*Firestore в колекцію 'collectionName'
* @param arreyForUpload - масив з файлом для збереження.
* @param collectionName - назва колекції, куди додаються дані.
*/
async function saveNewData(arreyForUpload, collectionName) {
   console.log(arreyForUpload);
   for await (const item of arreyForUpload) {
      const { downloadUrl, metadata, snapshort } = await uploadFile(item.image);
      addDataToFirebase(item.id, collectionName, 'downloadUrl', downloadUrl, false);
      console.log(downloadUrl);
      for (const key in item) {
         if (Object.hasOwnProperty.call(item, key)) {
            if (key != "id" & key != "image") {
               addDataToFirebase(item.id, collectionName, key, item[key], true)
            }

         }
      }
   }
}

export { db, uploadFile, saveNewData, addDataToFirebase }