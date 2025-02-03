"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _head = require("@vueuse/head");

require("virtual:windi.css");

require("bootstrap-icons/font/bootstrap-icons.css");

require("./assets/main.css");

require("./assets/welcome.css");

require("./assets/about.css");

require("./assets/contact.css");

require("./assets/services.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*--------Create APP----------*/
// Importa Vue, el componente principal y crea la aplicación.

/*--------Windi.css----------*/
// Importa Windi CSS para estilos utilitarios.

/*--------Bootstrap Icon----------*/
// Importa Bootstrap Icons para iconos.

/*--------Estilos CSS----------*/
// Importa los estilos CSS personalizados.
// Crea la aplicación y añade el encabezado y partículas.
var app = (0, _vue.createApp)(_App["default"]);
var head = (0, _head.createHead)();
app.use(head); // Añade soporte de metadatos.

app.mount("#app"); // Monta la aplicación en el elemento con id "app".