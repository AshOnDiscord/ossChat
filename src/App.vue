<script setup>
import Login from "./components/login.vue";
</script>

<template>
  <Login v-if="!user" @login="(user) => (user = user)" />
  <div v-else>
    <h1>Hello, {{ user.uid }} | {{ user.uid }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// #region firebase setup
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApnDFVc3CxT2B5GwLc4fmmkzOge90-jvM",
  authDomain: "osschat-5c54b.firebaseapp.com",
  projectId: "osschat-5c54b",
  storageBucket: "osschat-5c54b.appspot.com",
  messagingSenderId: "1084566090149",
  appId: "1:1084566090149:web:87c3fb10d837a2fe16384c",
  measurementId: "G-K119JYEVQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
// #endregion

export default {
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style></style>
