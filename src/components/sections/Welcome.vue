<script setup>
import { useHead } from "@vueuse/head";
import Layout from "../app/Layout.vue";
import _welcome from "../../customize/Welcome";
import _header from "../../customize/Header";
import Particles from "../app/Particles.vue";

useHead({
  title: "Leo Sebastian | Portfolio",
  meta: [
    {
      name: `description`,
      content: "Leo Sebastian | Portfolio",
    },
  ],
});
</script>

<template>
  <Layout id="home">
    <Particles :showParticles="true" />
    <div class="flex h-screen items-center justify-center">
      <div class="flex flex-col mx-auto items-center justify-center -sm:mt-10">
        <h1
          class="bg-clip-text font-semibold color-changing-title mt-10 mb-4 text-center text-transparent text-8xl leading-22 w-4/4 -md:w-full -md:text-6xl"
        >
          {{ _welcome.title }}
        </h1>
        <div class="card">
          <div class="loader">
            <p class="dev">Developer</p>
            <div class="words">
              <span class="word">Web / Mobile</span>
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
              href="https://drive.google.com/file/d/1cmzq-X3vkXXyHZ48UGWxmjKfzewyHcQf/view"
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
          <a
            :href="`#${_header.link_2}`"
            class="no-underline"
          >
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
