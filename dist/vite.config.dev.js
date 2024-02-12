"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vite = require("vite");

var _pluginVue = _interopRequireDefault(require("@vitejs/plugin-vue"));

var _vitePluginWindicss = _interopRequireDefault(require("vite-plugin-windicss"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // https://vitejs.dev/config/


var _default = (0, _vite.defineConfig)({
  plugins: [(0, _pluginVue["default"])(), (0, _vitePluginWindicss["default"])()],
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_EMAILJS_USER': JSON.stringify(process.env.EMAILJS_USER_ID)
  }
});

exports["default"] = _default;