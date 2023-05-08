import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";

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


function getOrigId() {
   return Date.now() + Math.random().toString(36).substring(10);
}

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

export { db, uploadFile }