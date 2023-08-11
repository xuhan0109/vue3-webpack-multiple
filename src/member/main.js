import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import './assets/css/_variables.scss'
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store)
    .use(router)
    .mount("#app");