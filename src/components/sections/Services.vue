<script setup>
import Layout from "../app/Layout.vue";
import _services from "../../customize/Services";
</script>

<style>
.custom-color {
  color: #d8e9a8;
}
.custom-title {
  color: #4e9f3d;
}
</style>
<template>
  <Layout id="services" class="py-20 -sm:py-10">
    <h1 class="title">{{ _services.title }}</h1>
    <template v-for="(service, index) in _services.services" :key="index">
      <!-- <div class="mt-20 card-services-container -sm:mt-10">
        <div class="col-span-1">
          <h1 class="custom-title">{{ service.title }}</h1>
          <p class="mt-3 w-10/12 description -md:w-full custom-color">
            {{ service.description }}
          </p>
        </div> 
        <div class="h-auto col-span-1 -sm:row-start-1">
          <img
            :src="service.img"
            alt="services-image"
            width="100%"
            height="100%"
            class="object-cover h-80 w-full"
          />
        </div>
      </div> -->
      <div
        class="relative flex flex-col min-w-0 break-words bg-slate-800 shadow-soft-xl rounded-2xl bg-clip-border m-10"
      >
        <div class="flex-auto p-4">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div class="flex flex-col h-full">
                <p class="pt-2 mb-1 font-semibold">{{ service.title }}</p>
                <h5 class="font-bold">Soft UI Dashboard</h5>
                <p class="mb-12">
                  {{ service.description }}
                </p>
                <a
                  class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                  href="javascript:;"
                >
                  Read More
                  <i
                    class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                  ></i>
                </a>
              </div>
            </div>
            <div
              class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none"
            >
              <div
                class="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl"
              >
                <img
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                  class="absolute top-0 hidden w-1/2 h-full lg:block"
                  alt="waves"
                />
                <div class="relative flex items-center justify-center h-full">
                  <img
                    class="relative z-20 w-full pt-6"
                    :src="service.img"
                    alt="services-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
