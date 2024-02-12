<script setup>
import _header from "../../customize/Header";
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="flex h-screen bg-neutral-800 w-full top-0 left-0 z-30 fixed items-center justify-center"
  >
    <button
      class=" top-10 right-10 absolute group cursor-pointer outline-none hover:rotate-90 duration-300"
      @click="$emit('close')"
    >
      <svg
        class="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
        viewBox="0 0 24 24"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-width="1.5"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        ></path>
        <path stroke-width="1.5" d="M8 12H16"></path>
        <path stroke-width="1.5" d="M12 16V8"></path>
      </svg>
    </button>
    
    <nav class="flex flex-col">
      <a
      :href="`#${_header.link_1}`"
        class="m-0 text-slate-200 mt-6 text-4xl hover:text-lime-200 hover:no-underline link"
        @click="$emit('close')"
        >Inicio</a
      >
      <a
      :href="`#${_header.link_2}`"
        class="m-0 text-slate-200 mt-6 text-4xl hover:text-lime-200 hover:no-underline link"
        @click="$emit('close')"
        >Proyectos</a
      >
      <a
      :href="`#${_header.link_3}`"
        class="m-0 text-slate-200 mt-6 text-4xl hover:text-lime-200 hover:no-underline link"
        @click="$emit('close')"
        >Sobre Mi</a
      >
      <a
      :href="`#${_header.link_4}`"
        class="m-0 text-slate-200 mt-6 text-4xl hover:text-lime-200 hover:no-underline link"
        @click="$emit('close')"
        >Contacto</a
      >
    </nav>
  </div>
</template>
