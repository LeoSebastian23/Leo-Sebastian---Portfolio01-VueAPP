<script setup>
import Layout from "../app/Layout.vue";
import __about from "../../customize/About";
const getIcon = (skillName) => {
  const skill = __about.skills.find((s) => s.name === skillName);
  return skill ? skill.icon : null;
};
</script>
<template>
  <Layout id="about" class="py-30 -sm:py-0">
    <h1 class="text-center title text-zinc-200">{{ __about.title }}</h1>
    <div class="mt-20 card-services-container -sm:mt-10 -sm:gap-0 -md:items-start flex flex-col">

      <!-- Imagen y descripción -->
      <div class="flex flex-col sm:flex-row gap-8">
        <div class="h-180 sm:w-1/2">
          <img
            :src="__about.img"
            alt="services-image"
            class="h-full w-full object-cover rounded-full"
          />
        </div>
        <div class="sm:w-1/2">
          <h1 class="subtitle text-zinc-200">{{ __about.subtitle_about }}</h1>
          <p class="mt-3 description text-zinc-200">{{ __about.description_about }}</p>
        </div>
      </div>

      <!-- Experiencia -->
      <h1 class="mt-9 subtitle text-zinc-200">Experiencia</h1>
      <div class="grid grid-cols-2">
        <template v-for="(experience, index) in __about.experiences" :key="index">
          <div class="experience-container text-zinc-200">
            <span class="experience-company text-zinc-200">{{ experience.company }}</span>
            <span class="experience-rol text-zinc-200">{{ experience.rol }}</span>
            <span class="experience-date text-zinc-200">{{ experience.date }}</span>
          </div>
        </template>
      </div>

      <!-- Skills e Tools -->
      <div class="mt-20 flex flex-col sm:flex-row gap-8">

        <!-- Skills -->
        <div class="flex flex-col bg-slate-200">
          <h1 class="subtitle-inner text-zinc-800 text-center">Skills</h1>
          <div class="flex flex-wrap justify-center">
            <template v-for="(skill, index) in __about.skills" :key="index">
              <div class="bg-slate-800 m-5 p-5 w-auto rounded-lg shadow-md  flex flex-col justify-items-center items-center">
                <img :src="getIcon(skill.name)" alt="icon" class="icon w-25 mr-2" />
                <span>{{ skill.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

