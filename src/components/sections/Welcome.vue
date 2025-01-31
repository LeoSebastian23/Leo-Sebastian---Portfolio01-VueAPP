<script setup>
import { useHead } from "@vueuse/head";
import Layout from "../app/Layout.vue";
import _welcome from "../../customize/Welcome";
import _header from "../../customize/Header";
import { ref, onMounted } from "vue";

useHead({
  title: "Leo Sebastian | Portfolio",
  meta: [
    {
      name: `description`,
      content: "Leo Sebastian | Portfolio",
    },
  ],
});


const texts = ["Full Stack", "Software", "Web"];
const currentText = ref("");
const currentIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = 150; // Velocidad de escritura
const deletingSpeed = 100; // Velocidad de borrado
const pauseBetweenTexts = 2000; // Pausa entre textos

const typeText = () => {
  const fullText = texts[currentIndex.value];

  if (isDeleting.value) {
    // Borrando
    currentText.value = fullText.substring(0, currentText.value.length - 1);
  } else {
    // Escribiendo
    currentText.value = fullText.substring(0, currentText.value.length + 1);
  }

  // Cambiar entre escribir y borrar
  if (!isDeleting.value && currentText.value === fullText) {
    // Pausa después de escribir
    setTimeout(() => (isDeleting.value = true), pauseBetweenTexts);
  } else if (isDeleting.value && currentText.value === "") {
    // Cambiar al siguiente texto
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % texts.length; // Reiniciar el índice
  }

  // Velocidad de animación
  const speed = isDeleting.value ? deletingSpeed : typingSpeed;
  setTimeout(typeText, speed);
};

onMounted(() => {
  typeText(); // Iniciar la animación al montar el componente
});
</script>

<template>
  <Layout id="home">
    <div class="flex h-screen items-center justify-center">
      <div
        class="flex flex-col mx-auto items-center justify-center -sm:mt-10 slide-in-left"
      >
        <h1
          class="bg-clip-text font-semibold color-changing-title mt-20 mb-4 text-center text-transparent text-8xl leading-22 w-4/4 -md:w-full -md:text-6xl"
        >
          {{ _welcome.title }}
        </h1>
        <div class="card slide-in-left">
          <div class="loader">
            <p class="dev">Desarrollador</p>
            <div class="words">
              <span class="word">{{ currentText }}</span>
            </div>
          </div>
        </div>
        <div
          class="w-1/2 flex justify-around items-center h-48 -lg:flex-col -lg:justify-around"
        >
          <button class="bookmarkBtn">
            <a
              href="https://github.com/LeoSebastian23"
              target="_blank"
              class="IconContainer"
            >
              <i class="bi bi-github black-icon"></i>
            </a>
            <p class="text">GitHub</p>
          </button>

          <button class="bookmarkBtn">
            <a
              href="https://drive.google.com/file/d/1f5dE7OkS7BfCeLr040UojrX6YzSnJ3jN/view?usp=drive_link"
              target="_blank"
              class="IconContainer"
            >
              <i class="bi bi-download black-icon"></i>
            </a>
            <p class="text">CV</p>
          </button>

          <button class="bookmarkBtn">
            <a
              href="https://www.linkedin.com/in/leosebastian24/"
              target="_blank"
              class="IconContainer"
            >
              <i class="bi bi-linkedin black-icon"></i>
            </a>
            <p class="text">LinkedIn</p>
          </button>
        </div>
        <button class="BtmProyects" data-text="Awesome">
          <a :href="`#${_header.link_2}`" class="no-underline">
            <span class="actual-text">&nbsp;Proyectos&nbsp;</span>
            <span aria-hidden="true" class="hover-text"
              >&nbsp;Proyectos&nbsp;</span
            >
          </a>
        </button>
      </div>
    </div>
  </Layout>
</template>

