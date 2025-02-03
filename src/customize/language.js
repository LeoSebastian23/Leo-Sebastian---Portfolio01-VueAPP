import { ref } from 'vue';

// Creamos una variable reactiva para almacenar el idioma
const currentLanguage = ref('es'); // el idioma por defecto es español

// Función para cambiar el idioma
function changeLanguage(lang) {
  currentLanguage.value = lang;
}

export default {
  currentLanguage,
  changeLanguage,
};