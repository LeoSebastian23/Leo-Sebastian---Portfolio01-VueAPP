<!-- Particles.vue -->

<template>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
    />
  </template>
  
  <script>
  // Importa la biblioteca vue3-particles
  import { loadSlim } from "tsparticles-slim";
  import { defineComponent } from 'vue';
  
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  
  const particlesLoaded = async (container) => {
    console.log("Particles container loaded", container);
  };
  
  export default defineComponent({
    name: 'Particles',
    data() {
      return {
        // Define las opciones de las partículas aquí
        particlesOptions: {
                    fpsLimit: 250,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 800,
                                duration: 1,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 3
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.2
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#dcec3c',
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 400
                            },
                            value: 20
                        },
                        opacity: {
                            value: 0.2
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 1
                        }
                    },
                    detectRetina: true
                }
      };
    },
    setup() {
      return {
        particlesInit,
        particlesLoaded,
      };
    },
  });
  </script>
  
  