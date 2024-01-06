<script setup>
//Helper components
import Layout from "./components/app/Layout.vue";

//App componentes
import Header from "./components/app/Header.vue";
import Footer from "./components/app/Footer.vue";

//Sections by order
import Welcome from "./components/sections/Welcome.vue";

import Services from "./components/sections/Services.vue";
import About from "./components/sections/About.vue";
import Contact from "./components/sections/Contact.vue";

//SEO
import { useHead } from "@vueuse/head";

useHead({
  title: "Leo Sebastian | Portfolio",
  meta: [
    {
      name: `description`,
      content: "Leo Sebastian | Portfolio",
    },
  ],
});
</script>

<template>
  <Header></Header>
  <main>
    <Welcome />
    <About />
    <Services />
    <Contact />
  </main>
  <Footer></Footer>
</template>
