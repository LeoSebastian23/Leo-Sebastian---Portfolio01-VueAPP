<script setup>
import Layout from "../app/Layout.vue";
import _services from "../../customize/Services";

const openLink = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
};
</script>

<style>
.grid {
  display: grid;
  gap: 2.5rem; /* Espaciado entre las tarjetas */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Dos tarjetas por fila */
  }
}
</style>

<template>
  <Layout id="services" class="py-20 -sm:py-10">
    <!-- Título centrado -->
    <div
      class="flex justify-center items-center mt-3 rounded-lg"
    >
      <i class="bi bi-folder custom-size"></i>
      <h1 class="text-center title text-zinc-200 not-italic ml-2">
        {{ _services.title }}
      </h1>
    </div>
    <!-- Grid de proyectos -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 px-6 max-w-full mx-auto"
    >
      <template v-for="(service, index) in _services.services" :key="index">
        <div
          class="bg-slate-800 rounded-xl overflow-hidden transform transition-all hover:scale-101 hover:shadow-lg hover:shadow-teal-700/50"
        >
          <!-- Imagen del proyecto -->
          <div
            class="relative h-48 bg-cover bg-center"
            :style="{ backgroundImage: `url(${service.img})` }"
          >
            <!-- Overlay para el título y botones -->
            <div
              class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-end hover:bg-opacity-50"
            >
              <h3 class="text-2xl font-bold text-center text-white">
                {{ service.title }}
              </h3>
              <div class="flex space-x-2 mt-2 justify-center">
                <button
                  v-if="service.linkGH"
                  class="btnLinks hover:text-teal-400 transition-colors"
                  @click="openLink(service.linkGH)"
                >
                  <i class="bi bi-github text-xl"></i>
                </button>
                <button
                  v-if="service.linkLinkedIn"
                  class="btnLinks hover:text-teal-400 transition-colors"
                  @click="openLink(service.linkLinkedIn)"
                >
                  <i class="bi bi-linkedin text-xl"></i>
                </button>
                <button
                  v-if="service.linkWeb"
                  class="btnLinks hover:text-teal-400 transition-colors"
                  @click="openLink(service.linkWeb)"
                >
                  <i class="bi bi-globe text-xl"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Contenido del cuerpo -->
          <div class="p-2">
            <h3 class="text-center text-teal-400 m-2">
              {{ service.type }}
            </h3>

            <p
              class="mt-auto m-2 px-2 font-normal justify-center flex text-md group text-slate-100"
            >
              <span v-for="(tool, index) in service.tools" :key="index">
                <span class="bg-slate-600 px-2 mx-1 rounded-full -sm:px-1 -sm:mt-2 hidden sm:flex">{{
                  tool
                }}</span>
                <span v-if="index < service.tools.length - 1"></span>
              </span>
            </p>

            <ul
              class="list-disc text-gray-300 text-sm text-left leading-relaxed pl-5"
            >
              <li v-for="(point, index) in service.description" :key="index">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.btnLinks {
  font-size: x-large;
  color: white;
  background: rgb(23, 20, 20);
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  margin: 2px;
}

.btnLinks:hover {
  color: #2dd4bf; /* Color teal-400 */
}
</style>
