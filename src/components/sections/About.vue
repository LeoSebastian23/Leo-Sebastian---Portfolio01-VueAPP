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
  font-size: 48px;
  /* Tamaño personalizado */
  margin-right: 10px;
}
</style>
<template>
  <Layout id="about" class="py-20 -sm:py-0 -sm:flex flex-col justify-center">
    <div class="flex justify-center items-center mt-3">
      <i class="bi bi-person-circle custom-size"></i>
      <h1 class="text-center title text-zinc-200 not-italic">
        {{ __about.title }}
      </h1>
    </div>
    <div
      class="mt-10 card-services-container -sm:mt-10 -sm:gap-0 -md:items-start flex flex-col"
    >
      <!-- Imagen y descripción -->
      <div class="flex flex-col xl:flex-row items-center gap-8">
        <div class="h-180 lg:w-1/2 xl:h-180">
          <img
            :src="__about.img"
            alt="services-image"
            class="h-full w-full object-cover rounded-full xl:rounded-full"
          />
        </div>

        <div class="flex flex-col xxl:w-1/2 lg:w-1/2 -sm:items-center">
          <div class="about -sm:w-full">
            <h1
              class="subtitle text-4xl mb-5 text-zinc-200 not-italic flex justify-center -sm:text-3xl"
            >
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

      <div class="flex flex-col -sm:items-center">
        <div class="experience flex flex-col justify-center -sm:w-full">
          <div class="flex flex-col items-center justify-center">
            <h1
              class="subtitle text-4xl mb-5 text-zinc-200 not-italic flex justify-center -sm:text-3xl -sm:mb-2"
            >
              🎓Educación
            </h1>
            <template
              v-for="(education, index) in __about.education"
              :key="index"
            >
              <div class="experience-container text-zinc-200">
                <span class="experience-company text-zinc-200">{{
                  education.name
                }}</span>
                <span class="experience-rol text-zinc-200">{{
                  education.institute
                }}</span>
                <span class="experience-date text-zinc-200">{{
                  education.date
                }}</span>
                <a
                  class="experience-date flex justify-end text-zinc-200 hover:text-orange-200 no-underline"
                  :href="education.link"
                  target="_blank"
                >
                  Ver</a
                >
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="flex flex-col -sm:items-center">
        <div class="experience flex flex-col justify-center -sm:w-full">
          <h1
            class="subtitle text-4xl text-zinc-200 mb-5 not-italic flex justify-center -sm:text-center -sm:text-3xl"
          >
            📜Cursos y Certificados
          </h1>
          <div
            class="grid gap-4 -sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          >
            <template
              v-for="(certificados, index) in __about.certificados"
              :key="index"
            >
              <div class="cardLink justify-center">
                <a class="cardLink1" :href="certificados.link" target="_blank">
                  <p>{{ certificados.name }}</p>
                  <p class="small">
                    {{ certificados.place }}
                  </p>
                  <p class="small">
                    {{ certificados.date }}
                  </p>
                  <div class="go-corner" href="#">
                    <div class="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="flex flex-col -sm:items-center">
        <div class="experience flex flex-col justify-center -sm:w-full">
          <h1
            class="subtitle text-4xl text-zinc-200 text-center mb-5 not-italic"
          >
            ✔️Tecnologías
          </h1>
          <div
            class="grid gap-4 justify-center items-center -sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 "
          >
            <template v-for="(skill, index) in __about.skills" :key="index">
              <div class="cardSkill m-5">
                <div class="cardSkill2">
                  <img
                    :src="getIcon(skill.name)"
                    alt="icon"
                    class="icon w-25"
                  />
                  <span>{{ skill.name }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
