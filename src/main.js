import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfb1osHVvv7un1mBwiCWs8jnSZ31QAxWQ",
  authDomain: "horario-atual.firebaseapp.com",
  projectId: "horario-atual",
  storageBucket: "horario-atual.appspot.com",
  messagingSenderId: "869534634930",
  appId: "1:869534634930:web:c007db76143f2d41230aab",
  measurementId: "G-7VSHMP0TYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  //...



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
