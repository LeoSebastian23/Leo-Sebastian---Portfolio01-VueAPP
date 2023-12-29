<script setup>
import Layout from "./Layout.vue";
import _contact from "../../customize/Contact";
</script>
<template>
  <footer class="mt-30">
    <Layout
      class="grid py-4 grid-cols-2 justify-center items-center -sm:grid-cols-1"
    >
      <div class="flex justify-start -sm:justify-center">
        <a
          :href="_contact.instagram_url"
          target="_blank"
          class="h-auto w-auto opacity-40 inline-block hover:opacity-80"
        >
          <img
            src="../../assets/icons/instagram.svg"
            alt="social-instagram"
            width="32"
            height="32"
            class="mr-6"
          />
        </a>
        <a
          :href="_contact.twitter_url"
          target="_blank"
          class="h-auto w-auto opacity-40 inline-block hover:opacity-80"
        >
          <img
            src="../../assets/icons/twitter.svg"
            alt="social-instagram"
            width="32"
            height="32"
            class="mr-6"
          />
        </a>
        <a
          :href="_contact.github_url"
          target="_blank"
          class="h-auto w-auto opacity-40 inline-block hover:opacity-80"
        >
          <img
            src="../../assets/icons/github.svg"
            alt="social-instagram"
            width="32"
            height="32"
          />
        </a>
      </div>
      <div class="flex justify-end -sm:mt-8 -sm:justify-center">
        <img
          src="/LeoDev.jpg"
          class="object-cover"
          alt=""
          width="80"
        />
      </div>
    </Layout>
    <div class="bg-gray-900 py-12 -sm:px-2">
      <small class="text-center w-full text-gray-50 inline-block"
        >Designed and Developed with ❤️ by
        <a
          href="https://www.linkedin.com/in/leosebastian24/"
          class="font-bold text-gray-50 no-underline"
          >Leo Sebastian</a
        ></small
      >
    </div>
  </footer>
</template>
