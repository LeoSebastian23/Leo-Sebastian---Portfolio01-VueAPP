<script setup>
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
      name: `Portfolio`,
      content: "Leo Sebastian | Portfolio",
    },
  ],
});
</script>

<style>
body {
  margin: 0; /* Elimina márgenes por defecto */
  font-family: 'Inter', sans-serif; /* Fuente moderna */
  overflow-x: hidden; /* Evita scroll horizontal */
}

#app {
  position: relative;
  min-height: 100vh; /* Asegura que el fondo cubra toda la ventana */
  background: radial-gradient(circle at 50% 50%, #101b00, #000000);
  transition: background-position 0.2s ease-out; /* Suavidad al movimiento */
}
</style>

<template>
  <div id="app" @mousemove="handleMouseMove">
    <Header></Header>
    <main>
      <Welcome />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer></Footer>
  </div>
</template>


