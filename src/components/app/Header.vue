<script setup>
import Layout from "./Layout.vue";
import Menu from "./Menu.vue";
import _header from "../../customize/Header";
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>
<style>
  .link {
    color:azure;
  }
</style>
<template>
  <header
    class="flex w-full py-2 top-0 z-10 fixed backdrop-filter backdrop-blur-md items-center -sm:h-24 -sm:justify-center max-sm:items-center" style="background-color: rgb(254, 243, 199, 0.1);"
  >
    <Layout class="w-full grid grid-cols-3 items-center justify-between">
      <div class="flex col-span-1 items-center">
        <a :href="`#${_header.link_1}`">
      <img
        :src="_header.img_logo_url"
        class="object-cover rounded"
        width="60"
        alt="Logo"
      />
    </a>
      </div>
      <nav class="flex col-span-2 items-center justify-end -sm:hidden ">
        <a :href="`#${_header.link_3}`" class="link text-2xl text-slate-300 hover:no-underline hover:text-lime-200 font-mono">Sobre Mi</a>
        <a :href="`#${_header.link_2}`" class="link text-2xl text-slate-300 hover:no-underline hover:text-lime-200 font-mono">Proyectos</a>
        <a :href="`#${_header.link_4}`" class="link text-2xl text-slate-300 hover:no-underline hover:text-lime-200 font-mono">Contacto</a>
      </nav>
      <div class="col-span-2 hidden items-center justify-end -sm:flex">
        <button
          aria-label="open-menu"
          class="p-1"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="h-8 fill-current stroke-gray-100 w-8"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <teleport to="body">
          <Menu v-if="isMenuOpen" @close="isMenuOpen = false" />
        </teleport>
      </div>
    </Layout>
  </header>
</template>
