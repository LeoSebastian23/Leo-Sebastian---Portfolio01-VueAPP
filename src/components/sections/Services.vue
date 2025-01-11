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
.btnLinks {
  background-color: rgb(0, 109, 139); /* Mountain Meadow */
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btnLinks:hover {
  background-color: rgb(36, 161, 196); /* Tonalidad más brillante */
  transform: translateY(-2px);
}

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
      <h1 class="text-center title text-zinc-200 not-italic">{{ _services.title }}</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-10 px-6">
  <template v-for="(service, index) in _services.services" :key="index">
    <div
      class="bg-slate-800 bg-opacity-95 shadow-xl rounded-xl overflow-hidden w-full max-w-md transform transition-all hover:-translate-y-2 hover:shadow-md hover:shadow-teal-700"
    >
      <!-- Imagen del proyecto -->
      <div class="relative">
        <img
          :src="service.img"
          alt="services-image"
          class="w-full h-48 object-contain"
        />
        <!-- Capa de overlay sobre la imagen -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
        <!-- Título sobre la imagen -->
        <h3 class="absolute bottom-4 left-4 text-xl font-bold text-mountain-meadow">
          {{ service.title }}
        </h3>
      </div>

      <!-- Contenido del cuerpo -->
      <div class="p-6 flex flex-col space-y-4">
        <!-- Descripción -->
        <p class="text-gray-300 text-sm text-left leading-relaxed">
          {{ service.description }}
        </p>

        <!-- Herramientas -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tool, index) in service.tools"
            :key="index"
            class="text-xs bg-slate-600 px-3 py-1 rounded-full text-white"
          >
            {{ tool }}
          </span>
        </div>

        <!-- Botones -->
        <div class="flex justify-center space-x-4 mt-4">
          <button
            v-if="service.linkGH"
            class="btnLinks"
            @click="openLink(service.linkGH)"
          >
            <i class="bi bi-github"></i>
          </button>
          <button
            v-if="service.linkLinkedIn"
            class="btnLinks"
            @click="openLink(service.linkLinkedIn)"
          >
            <i class="bi bi-linkedin"></i>
          </button>
          <button
            v-if="service.linkWeb"
            class="btnLinks"
            @click="openLink(service.linkWeb)"
          >
            <i class="bi bi-globe"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
</div>

  </Layout>
</template>

