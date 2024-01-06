<script setup>
import Layout from "../app/Layout.vue";
import __about from "../../customize/About";

const getIcon = (skillName) => {
  const skill = __about.skills.find((s) => s.name === skillName);
  return skill ? skill.icon : null;
};
</script>
<style>
.custom-size {
  font-size: 48px; /* Tamaño personalizado */
  margin-right: 10px;
}
</style>
<template>
  <Layout id="about" class="py-30 -sm:py-0">
    <div class="flex justify-center items-center">
      <i class="bi bi-person-fill custom-size"></i>
      <h1 class="text-center title text-zinc-200 not-italic">{{ __about.title }}</h1>
    </div>
    <div
      class="mt-20 card-services-container -sm:mt-10 -sm:gap-0 -md:items-start flex flex-col"
    >
      <!-- Imagen y descripción -->
      <div class="flex flex-col xl:flex-row items-center gap-8">
        <div class="h-180 lg:w-1/2">
          <img
            :src="__about.img"
            alt="services-image"
            class="h-full w-full object-cover rounded-full"
          />
        </div>

        <div class="flex flex-col xxl:w-1/2 lg:w-1/2">
          <div class="about">
            <h1 class="subtitle text-zinc-200 not-italic">
              💻{{ __about.subtitle_about }}
            </h1>
            <p class="mt-3 description text-zinc-200">
              {{ __about.description_about }}
            </p>
            <p class="mt-3 description text-zinc-200">
              {{ __about.description02_about }}
            </p>
            <p class="mt-3 description text-zinc-200">
              {{ __about.description03_about }}
            </p>
          </div>
        </div>
      </div>

      <!-- Experiencia -->
      <div class="experience">
        <h1 class="subtitle text-zinc-200 not-italic">💼 Experiencia</h1>
        <template
          v-for="(experience, index) in __about.experiences"
          :key="index"
        >
          <div class="experience-container text-zinc-200">
            <span class="experience-company text-zinc-200">{{
              experience.company
            }}</span>
            <span class="experience-rol text-zinc-200">{{
              experience.rol
            }}</span>
            <span class="experience-date text-zinc-200">{{
              experience.date
            }}</span>
          </div>
        </template>
      </div>

      <!-- Skills e Tools -->
      <!-- Skills -->
      <div class="containerSkills">
        <h1 class="subtitle text-zinc-200 text-center m-5 not-italic">⭐Skills</h1>
        <div class="flex flex-wrap justify-center">
          <template v-for="(skill, index) in __about.skills" :key="index">
            <div class="cardSkill m-5">
              <div class="cardSkill2 ">
                <img
                  :src="getIcon(skill.name)"
                  alt="icon"
                  class="icon w-25 mr-2"
                />
                <span>{{ skill.name }}</span>
              </div>
            </div>
            <!-- <div
                class="bg-slate-800 m-5 p-5 w-auto rounded-lg shadow-md flex flex-col justify-items-center items-center"
              >
                
              </div> -->
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>
