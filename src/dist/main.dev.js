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

var _vue3Particles = _interopRequireDefault(require("vue3-particles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*--------Create APP----------*/

/*--------Windi.css----------*/

/*--------Bootstrap Icon----------*/

/*--------Estilos CSS----------*/

/*--------Particles----------*/
var app = (0, _vue.createApp)(_App["default"]);
var head = (0, _head.createHead)();
app.use(_vue3Particles["default"]);
app.use(head);
app.mount("#app");