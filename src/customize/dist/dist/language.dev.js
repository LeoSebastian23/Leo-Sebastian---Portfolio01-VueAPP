"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

// Creamos una variable reactiva para almacenar el idioma
var currentLanguage = (0, _vue.ref)('es'); // el idioma por defecto es español
// Función para cambiar el idioma

function changeLanguage(lang) {
  currentLanguage.value = lang;
}

var _default = {
  currentLanguage: currentLanguage,
  changeLanguage: changeLanguage
};
exports["default"] = _default;