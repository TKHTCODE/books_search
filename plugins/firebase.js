// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ92nzHaW3qMo7J1XO43WH_Kd93N7DKxI",
  authDomain: "book-search-nuxt-app.firebaseapp.com",
  projectId: "book-search-nuxt-app",
  storageBucket: "book-search-nuxt-app.appspot.com",
  messagingSenderId: "570682563105",
  appId: "1:570682563105:web:98e85f3dc4c98e5abde160"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default (context, inject) => {
    inject('firebase', firebaseApp)
}