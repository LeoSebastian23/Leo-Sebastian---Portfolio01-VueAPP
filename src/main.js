import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import "virtual:windi.css";
import "./assets/main.css";
import "./assets/welcome.css"
import Particles from 'vue3-particles';


const app = createApp(App);
const head = createHead();

app.use(Particles);
app.use(head);
app.mount("#app");
