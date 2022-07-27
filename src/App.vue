<script setup>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Chat from "./components/Chat.vue";
</script>

<template>
  <div v-if="!user">
    <Login
      v-if="!makingAcc"
      @login="(credintials) => login(credintials)"
      @register="makingAcc = true"
    />
    <Register
      v-else
      @register="(credintials) => register(credintials)"
      @login="makingAcc = false"
    />
  </div>
  <Chat :user="user" :db="db" v-else />
</template>

<script>
// #region firebase setup
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
const db = getFirestore(app);
// #endregion

export default {
  data() {
    return {
      user: null,
      makingAcc: false,
    };
  },
  methods: {
    register(credintials) {
      createUserWithEmailAndPassword(
        auth,
        credintials.email,
        credintials.password
      )
        .then(async (userObj) => {
          const user = userObj.user;

          if (credintials.stayLoggedIn) {
            localStorage.setItem("user", JSON.stringify(user));
          }

          console.log(user.uid);

          const docRef = doc(db, "users", user.uid.toString());

          await setDoc(docRef, {
            uid: user.uid,
            username: null,
            avatar: null,
            perms: JSON.stringify({}),
          });

          console.log("user created", user.uid);
          this.user = user;
        })
        .catch((error) => {
          console.log(error);
          console.error(error.message);
        });
    },
    login(credintials) {
      signInWithEmailAndPassword(auth, credintials.email, credintials.password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("user: ", user);
          console.log("Username: ", user.username);
          localStorage.setItem("user", JSON.stringify(user));
          this.user = user;
        })
        .catch((error) => {
          console.log(error);
          console.error(error.message);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          return console.error("Sign Out Error", error);
        });

      localStorage.removeItem("user");
      this.user = null;
    },
  },
  mounted() {
    const user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    }
  },
};
</script>

<style></style>
