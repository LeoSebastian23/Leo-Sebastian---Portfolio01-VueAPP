"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueI18n = require("vue-i18n");

var i18n = (0, _vueI18n.createI18n)({
  locale: 'es',
  // Idioma por defecto (puede ser 'es' o 'en' o el que prefieras)
  messages: {
    es: {
      services: 'Servicios',
      about: 'Acerca de mí',
      contact: 'Contacto',
      changeLanguage: 'Español'
    },
    en: {
      welcome: 'Welcome to my portfolio',
      services: 'Services',
      about: 'About me',
      contact: 'Contact',
      changeLanguage: 'English'
    }
  }
});
var _default = i18n;
exports["default"] = _default;