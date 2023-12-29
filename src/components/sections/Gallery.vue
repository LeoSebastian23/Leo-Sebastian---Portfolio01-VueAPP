<script lang="ts" setup>
import _gallery from "../../customize/Gallery";
</script>

<template>
  <section
    id="gallery"
    class="h-auto grid gap-10 grid-cols-3 grid-rows-2 -md:gap-4 -md:grid-cols-2 -md:grid-rows-3"
  >
    <template v-for="(img, index) in _gallery" :key="index">
      <img
        width="100%"
        height="100%"
        class="object-cover h-160 w-full col-span-1 row-span-1 -sm:h-full"
        :src="img"
        :alt="`gallery-image-${img}-${index}`"
      />
    </template>
  </section>
</template>
