<script setup>
import Layout from "../app/Layout.vue";
import _services from "../../customize/Services";
</script>
 
<style>
  .custom-color{
    color: #D8E9A8;
  }
  .custom-title{
    color: #4E9F3D;
  }
</style>
<template>
  <Layout id="services" class="py-20 -sm:py-10">
    <h1 class="title">{{ _services.title }}</h1>
    <template v-for="(service, index) in _services.services" :key="index">
      <div class="mt-20 card-services-container -sm:mt-10">
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
      </div>
    </template>
  </Layout>
</template>
