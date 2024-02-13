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
.custom-color {
  color: #d8e9a8;
}
.custom-title {
  color: #4e9f3d;
}
.custom-size {
  font-size: 48px; /* Tamaño personalizado */
  margin-right: 10px;
}
</style>
<template>
  <Layout id="services" class="py-20 -sm:py-10 ">
    <div
      class="flex justify-center items-center mt-3 bg-neutral-700 rounded-lg"
    >
      <i class="bi bi-folder custom-size"></i>
      <h1 class="title not-italic">{{ _services.title }}</h1>
    </div>
    <template v-for="(service, index) in _services.services" :key="index">
      <div class="flex flex-col -sm:items-center ">
      <div
        class="relative flex flex-col break-words bg-slate-800 bg-opacity-60 shadow-soft-xl rounded-2xl bg-clip-border m-10 -sm:w-full"
      >
        <div class="flex-auto p-4 ">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div class="flex flex-col h-full">
                <p class="pt-2 mb-1 font-semibold text-3xl -sm:text-2xl">
                  {{ service.title }}
                </p>
                <h5 class="font-bold"></h5>
                <p class="mb-12">
                  {{ service.description }}
                </p>
                <div class="btnContainerLinks">
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
                <p
                  class="mt-auto mb-0 font-normal leading-normal text-md group text-slate-100 -sm:mt-2"
                >
                  <span v-for="(tool, index) in service.tools" :key="index">
                    <span class="bg-slate-600 px-2 my-2 rounded-full -sm:px-1">{{
                      tool
                    }}</span>
                    <span v-if="index < service.tools.length - 1"> / </span>
                  </span>
                </p>
              </div>
            </div>
            <div
              class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none"
            >
              <div class="h-full rounded-xl">
                <div class="relative flex items-center justify-center h-full">
                  <a
                    v-if="service.linkGH"
                    @click="openLink(service.linkGH)"
                    target="_blank"
                  >
                    <img
                      class="imgProyects"
                      :src="service.img"
                      alt="services-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
  </Layout>
</template>
