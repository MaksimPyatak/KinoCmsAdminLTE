import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

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
const storageRef = ref(storage);
export { db, storageRef }