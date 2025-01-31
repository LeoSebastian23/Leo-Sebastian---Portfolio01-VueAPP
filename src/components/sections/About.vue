<script setup>
import Layout from "../app/Layout.vue";
import { computed } from "vue";
import __about from "../../customize/About";
import _about from "../../customize/About";

const frontendTechs = computed(() =>
  __about.skills.filter((tech) =>
    [
      "NextJS",
      "TypeScript",
      "ReactJS",
      "VueJS",
      "JavaScript",
      "TAILWIND",
      "CSS3",
      "HTML5",
    ].includes(tech.name)
  )
);

const backendTechs = computed(() =>
  __about.skills.filter((tech) =>
    ["NodeJS","Express", "Java", "Spring Boot", "MySQL", "MongoDB"].includes(tech.name)
  )
);

const testingTechs = computed(() =>
  __about.skills.filter((tech) => ["Postman"].includes(tech.name))
);

const getIcon = (skillName) => {
  const skill = __about.skills.find((s) => s.name === skillName);
  return skill ? skill.icon : null;
};
</script>
<style>
.bg-neutral-800 {
  background-color: rgba(15, 16, 18, 0.6);
}

.bg-neutral-700 {
  background-color: #3a3c43; /* Slightly lighter */
}

.shadow-lg {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.rounded-lg {
  border-radius: 0.75rem;
}

.transition-all {
  transition: all 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:text-orange-300:hover {
  color: #f6ad55; /* Bright orange */
}

.justify-items-center {
  justify-items: center;
}
</style>
<template>
  <Layout id="about" class="py-20 px-6 sm:px-12">
    <!-- Título centrado -->
    <div
      class="flex justify-center items-center mt-3 bg-neutral-700 rounded-lg"
    >
      <i class="bi bi-person custom-size"></i>
      <h1 class="text-center title text-zinc-200 not-italic">
        {{ _about.title }}
      </h1>
    </div>
    <!-- Sección Acerca de mí -->
    <section
      class="bg-neutral-800 rounded-lg p-6 text-zinc-200 mb-10 shadow-lg mt-4"
    >
      <div
        class="flex flex-col lg:flex-row items-center gap-8 fade-in-up-scroll"
      >
        <!-- Imagen -->
        <img
          :src="__about.img"
          alt="profile-image"
          class="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-md"
        />
        <!-- Descripción -->
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl font-semibold">💻 {{ __about.subtitle_about }}</h2>
          <p>{{ __about.description_about }}</p>
          <p>{{ __about.description02_about }}</p>
          <p>{{ __about.description03_about }}</p>
        </div>
      </div>
    </section>

    <!-- Sección Experiencia -->
    <section
      class="bg-neutral-800 rounded-lg p-6 text-zinc-200 mb-10 shadow-lg"
    >
      <h2 class="text-3xl font-bold text-center mb-6">💼 Experiencia</h2>
      <div class="space-y-6">
        <template
          v-for="(experiences, index) in __about.experiences"
          :key="index"
        >
          <div class="p-4 bg-neutral-700 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold">{{ experiences.rol }}</h3>
            <h4>📍 {{ experiences.company }}</h4>
            <h4>📆 {{ experiences.date }}</h4>
            <p>📁 {{ experiences.tasks }}</p>
          </div>
        </template>
      </div>
    </section>

    <!-- Sección Educación -->
    <section
      class="bg-neutral-800 rounded-lg p-6 text-zinc-200 mb-10 shadow-lg"
    >
      <h2 class="text-3xl font-bold text-center mb-6">🎓 Educación</h2>
      <div class="space-y-6">
        <template v-for="(education, index) in __about.education" :key="index">
          <div class="p-4 bg-neutral-700 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold">{{ education.name }}</h3>
            <p>{{ education.institute }} - {{ education.date }}</p>
            <p>{{ education.description_1 }}</p>
            <a
              :href="education.link"
              target="_blank"
              class="text-mountain-meadow underline hover:text-orange-300"
            >
              Ver más
            </a>
          </div>
        </template>
      </div>
    </section>

    <!-- Sección Cursos y Certificados -->
    <section
      class="bg-neutral-800 rounded-lg p-6 text-zinc-200 mb-10 shadow-lg"
    >
      <h2 class="text-3xl font-bold text-center mb-6">
        📜 Cursos y Certificados
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <template
          v-for="(certificado, index) in __about.certificados"
          :key="index"
        >
          <div
            class="bg-neutral-700 p-4 rounded-lg shadow-md transform hover:scale-102 transition-all"
          >
            <img
              :src="certificado.img"
              alt="certificate"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-semibold">{{ certificado.name }}</h3>
            <p>{{ certificado.place }}</p>
            <p>{{ certificado.date }}</p>
          </div>
        </template>
      </div>
    </section>

    <!-- Sección Tecnologías -->
    <section class="bg-neutral-800 rounded-lg p-6 text-zinc-200 shadow-lg">
      <h2 class="text-3xl font-bold text-center mb-6">✔️ Tecnologías</h2>

      <div class="flex flex-col gap-8">
        <!-- Frontend -->
        <div>
          <h3 class="text-2xl font-semibold text-left mb-4">🎨 Frontend:</h3>
          <div
            class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-items-center"
          >
            <template v-for="(tech, index) in frontendTechs" :key="index">
              <div
                class="flex flex-col items-center p-4 bg-neutral-700 rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-2" />
                <span class="text-sm font-semibold">{{ tech.name }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-2xl font-semibold text-left mb-4">🖥️ Backend:</h3>
          <div
            class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-items-center"
          >
            <template v-for="(tech, index) in backendTechs" :key="index">
              <div
                class="flex flex-col items-center p-4 bg-neutral-700 rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-2" />
                <span class="text-sm font-semibold">{{ tech.name }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Testing -->
        <div>
          <h3 class="text-2xl font-semibold text-left mb-4">🛠️ Testing:</h3>
          <div
            class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-items-center"
          >
            <template v-for="(tech, index) in testingTechs" :key="index">
              <div
                class="flex flex-col items-center p-4 bg-neutral-700 rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-2" />
                <span class="text-sm font-semibold">{{ tech.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
