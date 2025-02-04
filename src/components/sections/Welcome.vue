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
const typingSpeed = 200;
const deletingSpeed = 100;
const pauseBetweenTexts = 2000;

const typeText = () => {
  const fullText = texts[currentIndex.value];

  if (isDeleting.value) {
    currentText.value = fullText.substring(0, currentText.value.length - 1);
  } else {
    currentText.value = fullText.substring(0, currentText.value.length + 1);
  }

  let speed = isDeleting.value ? deletingSpeed : typingSpeed;

  if (!isDeleting.value && currentText.value === fullText) {
    setTimeout(() => {
      isDeleting.value = true;
      typeText(); // Llamar la función inmediatamente después de la pausa
    }, pauseBetweenTexts);
    return;
  } else if (isDeleting.value && currentText.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % texts.length;
  }

  setTimeout(typeText, speed);
};

onMounted(() => {
  typeText();
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

        <div class="card">
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

