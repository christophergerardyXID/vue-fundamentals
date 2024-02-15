import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css';
import router from "@/router/router.js";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App)
    .use(router)
    .use(pinia);

app.mount('#app')
