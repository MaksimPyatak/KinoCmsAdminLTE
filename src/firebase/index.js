import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL, getMetadata, deleteObject } from "firebase/storage";

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

const uploadFile = async (file, fullPath) => {
   return await new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
         const result = reader.result;
         const { downloadUrl, metadata, snapshort } = await saveFile(fullPath + getOrigId() + file.name, result)
         if (snapshort) {
            console.log(metadata);
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
async function addDataToFirebase(id, collectionName, name, value, isMerge,) {
   try {
      console.log(value);
      await setDoc(doc(db, collectionName, id), {
         [name]: value,
      }, { merge: isMerge })
   } catch (error) {
      console.log(error);
   }
}

/**
* Зберігає файл з масиву 'arreyForUpload' в storege 
*firebase, а потім зберігає отриманий Url цього файлу та 
*інші дані що знаходяться в одному з файлом обєкті до 
*Firestore в колекцію 'collectionName'
* @param arreyForUpload - масив з файлами для збереження.
* @param collectionName - назва колекції, куди додаються дані.
*/
//function
const saveNewData = (arreyForUpload, collectionName, arrForDell, pathToSaveFile, arrayForShow) => {
   return new Promise((resolve, reject) => {

      console.log(arreyForUpload);
      (async function () {
         console.log(arreyForUpload);
         for await (const item of arreyForUpload) {
            if (item.image) {
               const { downloadUrl, metadata } = await uploadFile(item.image, pathToSaveFile);
               await addDataToFirebase(item.id, collectionName, 'downloadUrl', downloadUrl, false);
               await addDataToFirebase(item.id, collectionName, 'fullPath', metadata.fullPath, true);
               //console.log(arrayForShow[arrayForShow.findIndex((element) => element.id == item.id)]);
               arrayForShow[arrayForShow.findIndex((element) => element.id == item.id)]['fullPath'] = metadata.fullPath
            }
            for (const key in item) {
               if (Object.hasOwnProperty.call(item, key)) {
                  if (key != "image") {
                     await addDataToFirebase(item.id, collectionName, key, item[key], true)
                  }
               }
            }
         }
         arreyForUpload.splice(0, arreyForUpload.length);
         console.log(arrForDell);
         for await (const item of arrForDell) {
            console.log(item);
            await delCardInDoc(collectionName, item.nameDoc, item.fullPath)
         }
         arrForDell.splice(0, arrForDell.length);
         resolve()
      })()

   })
}
//function saveNewData(arreyForUpload, collectionName, arrForDell, pathToSaveFile) {
//   return new Promise((resolve, reject) => {
//      console.log(pathToSaveFile);
//      let promises = []
//      for (const item of arreyForUpload) {
//         promises.push(new Promise((resolve, reject) => {
//            if (item.image) {
//               //const { downloadUrl, metadata } =  
//               (uploadFile(item.image, pathToSaveFile)
//                  .then((response) => {
//                     addDataToFirebase(item.id, collectionName, 'downloadUrl', response.downloadUrl, false);
//                     return response
//                  })
//                  .then((response) => {
//                     addDataToFirebase(item.id, collectionName, 'fullPath', response.metadata.fullPath, true);
//                  }))
//            }
//            for (const key in item) {
//               if (Object.hasOwnProperty.call(item, key)) {
//                  if (key != "image") {
//                     addDataToFirebase(item.id, collectionName, key, item[key], true)
//                  }
//               }
//            }
//         }))
//      }
//      console.log(promises);
//      arreyForUpload.splice(0, arreyForUpload.length);
//      for (const item of arrForDell) {
//         delCardInDoc(collectionName, item.nameColl, item.fullPath)
//      }
//      arrForDell.splice(0, arrForDell.length);

//   })
//}

/**
* Завантажує дані з клекції 'collectionName'firebase, та
* зберігає їх в масив 'arreyForSave'
* @param arreyForSave - масив для збереження даниз.
* @param collectionName - назва колекції, з якої зкачуються дані.
*/
//async function getOllDoc(collectionName, arreyForSave) {
//   const querySnapshot = await getDocs(collection(db, collectionName));
//   querySnapshot.forEach((doc) => {
//      arreyForSave.push(doc.data())
//   })
//}

async function delStorageFile(fullPath) {
   // Create a reference to the file to delete
   const desertRef = ref(storage, fullPath);
   console.log(desertRef);

   // Delete the file
   await deleteObject(desertRef)
      .then(() => {
         console.log('File deleted successfully');
      }, (e) => {
         console.log('Uh-oh, an error occurred!' + e);
         return 'Uh-oh, an error occurred!'
      })
}

async function delCardInDoc(coll, nameDoc, fullPath) {
   try {
      await delStorageFile(fullPath)
         .then(() => {
            console.log('saccess')
         })
         .catch((e) => {
            console.log(e);
         });
      await deleteDoc(doc(db, coll, nameDoc))
         .then(() => {
            console.log('saccess')
         })
         .catch((e) => {
            console.log(e);
         });
   } catch (error) {
      console.log(error);
   }
}
export { db, uploadFile, saveNewData, addDataToFirebase, delCardInDoc, delStorageFile }