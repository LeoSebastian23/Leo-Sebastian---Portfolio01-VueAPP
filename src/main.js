import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import "virtual:windi.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/main.css";
import "./assets/welcome.css"
import "./assets/about.css"
import "./assets/contact.css"
import Particles from 'vue3-particles';


const app = createApp(App);
const head = createHead();

app.use(Particles);
app.use(head);
app.mount("#app");
