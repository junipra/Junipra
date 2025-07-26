import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const pinia = createPinia();
app.use(Toast, {
    position: "top-right",
    timeout: 3000,
    hideProgressBar: false,
  });

app.use(pinia);

app.mount('#app');
