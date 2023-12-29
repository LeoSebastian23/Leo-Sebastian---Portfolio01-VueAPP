<script setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="flex h-screen bg-gray-50 w-full top-0 left-0 z-30 fixed items-center justify-center"
  >
    <button
      aria-label="close-menu"
      class="top-10 right-10 absolute"
      @click="$emit('close')"
    >
      <svg
        class="h-10 w-10"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <nav class="flex flex-col">
      <a href="#gallery" class="m-0 mt-6 text-5xl link">Gallery</a>
      <a href="#services" class="m-0 mt-6 text-5xl link">Services</a>
      <a href="#about" class="m-0 mt-6 text-5xl link">About</a>
      <a href="#contact" class="m-0 mt-6 text-5xl link">Contact</a>
    </nav>
  </div>
</template>
