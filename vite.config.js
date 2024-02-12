import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import dotenv from "dotenv";

dotenv.config(); 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_EMAILJS_USER': JSON.stringify(process.env.EMAILJS_USER_ID),
  }
}); 
