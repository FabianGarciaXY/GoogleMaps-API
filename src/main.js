import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Aqui se agrego el Gmaps
import VueGeolocation from "vue3-geolocation";
import GMaps from "vuejs3-google-maps";

createApp(App).use(store).use(router).use(VueGeolocation).use(GMaps, {
    load: {
      apiKey: process.env.VUE_APP_MYKEY,
      libraries: ["places"],
    },
  }).mount('#app')
