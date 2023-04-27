<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <LayoutFrame>
      <div class="home-page">
         <h1>
            Home page
         </h1>
         <!--<p>
         Country: {{ name }}<br>
         Capital: {{ capital }}
                  </p>-->
         <p v-for="country in countries" :key="country.name">
            Country: {{ country.name }}<br>
            Capital: {{ country.capital }}
         </p>
         <p v-for="user in users" :key="user.firstName">
            {{ user.firstName }} {{ user.lastName }}
         </p>
      </div>
   </LayoutFrame>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore"
import db from '../../firebase/init.js'
import LayoutFrame from "@/features/layout-frame/LayoutFrame.vue";

async function createUser() {
   const colRef = collection(db, 'users');
   const dataObj = {
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990'
   }
   const docRef = await addDoc(colRef, dataObj);
   console.log('Document was created with ID:', docRef.id);
}

async function createCountry() {
   await setDoc(doc(db, 'countries', 'US'), {
      name: 'United States'
   })
}

async function addCountryCapital() {
   await setDoc(doc(db, 'countries', 'US'), {
      capital: 'Washington'
   }, { merge: true })
}

async function updateCountry() {
   await updateDoc(doc(db, 'countries', 'GB'), {
      capital: 'Londinium'
   })
}

const name = ref('');
const capital = ref('');
async function getCountry() {
   const docSnap = await getDoc(doc(db, 'countries', 'GB'))
   if (docSnap.exists()) {
      name.value = docSnap.data().name;
      capital.value = docSnap.data().capital;
   } else {
      console.log('Document does not exist');
   }
}

const countries = ref([])
async function getCountries() {
   const querySnap = await getDocs(query(collection(db, 'countries')));
   querySnap.forEach((doc) => {
      countries.value.push(doc.data())
   })
}
const users = ref([]);
async function getUsers() {
   const q = query(collection(db, 'users'), where('dob', '>', '1990'))
   const querySnap = await getDocs(q);
   console.log(querySnap);
   querySnap.forEach((doc) => {
      console.log(doc.data());
      users.value.push(doc.data())
   });
}

onMounted(() => {
   //createUser();
   //createCountry();
   //addCountryCapital();
   //updateCountry();
   //getCountry();
   //getCountries();
   getUsers();
})

</script>

<style lang="scss" scoped>
.home-page {
   margin-left: 250px;
}
</style>