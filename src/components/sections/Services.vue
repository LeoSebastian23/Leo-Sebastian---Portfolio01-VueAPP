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
    <div class="flex justify-center items-center mt-3 bg-neutral-700 rounded-lg">
      <i class="bi bi-folder custom-size"></i>
      <h1 class="text-center title text-zinc-200 not-italic ml-2">
        {{ _services.title }}
      </h1>
    </div>

    <!-- Grid de proyectos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
      <template v-for="(service, index) in _services.services" :key="index">
        <div
          class="bg-slate-800 rounded-xl overflow-hidden transform transition-all hover:scale-102 hover:shadow-2xl hover:shadow-teal-700/50"
        >
          <!-- Imagen del proyecto -->
          <div
            class="relative h-48 bg-cover bg-center"
            :style="{ backgroundImage: `url(${service.img})` }"
          >
            <!-- Overlay para el título y botones -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 class="text-2xl font-bold text-white">
                {{ service.title }}
              </h3>
              <div class="flex space-x-2 mt-2">
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
          <div class="p-6">
            <p class="text-gray-300 text-sm text-left leading-relaxed">
              {{ service.description }}
            </p>
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
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.btnLinks:hover {
  color: #2dd4bf; /* Color teal-400 */
}
</style>