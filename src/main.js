/*--------Create APP----------*/
// Importa Vue, el componente principal y crea la aplicación.
import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";

/*--------Windi.css----------*/
// Importa Windi CSS para estilos utilitarios.
import "virtual:windi.css";

/*--------Bootstrap Icon----------*/
// Importa Bootstrap Icons para iconos.
import 'bootstrap-icons/font/bootstrap-icons.css';

/*--------Estilos CSS----------*/
// Importa los estilos CSS personalizados.
import "./assets/main.css";
import "./assets/welcome.css";
import "./assets/about.css";
import "./assets/contact.css";
import "./assets/services.css";

/*--------Particles----------*/
// Importa y configura la librería de partículas para efectos visuales.
import Particles from 'vue3-particles';

// Crea la aplicación y añade el encabezado y partículas.
const app = createApp(App);
const head = createHead();

app.use(Particles); // Añade partículas.
app.use(head); // Añade soporte de metadatos.
app.mount("#app"); // Monta la aplicación en el elemento con id "app".

