<template>
   <div>
      <h1>Statistic Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro cum amet itaque necessitatibus dolore
         animi labore laboriosam error, voluptatum consectetur nisi eligendi tempore consequatur quam nesciunt autem quia
         saepe.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro cum amet itaque necessitatibus dolore
         animi labore laboriosam error, voluptatum consectetur nisi eligendi tempore consequatur quam nesciunt autem quia
         saepe.</p>
      <RouterLink to="/about-cinema">Abou Cinema Page</RouterLink>
      <p v-for="country in countries" :key="country.name">
         Country: {{ country.name }}<br>
         Capital: {{ country.capital }}
      </p>
      <p v-for="user in users" :key="user.firstName">
         {{ user.firstName }} {{ user.lastName }}
      </p>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase/index.js'


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
   createCountry();
   addCountryCapital();
   //updateCountry();
   //getCountry();
   getCountries();
   getUsers();
})

</script>

<style lang="scss" scoped></style>