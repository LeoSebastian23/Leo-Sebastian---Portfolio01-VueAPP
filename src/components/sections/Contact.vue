<script setup>
import Layout from "../app/Layout.vue";
import _contact from "../../customize/Contact";
</script>
<style>
.custom-color {
  color: #d8e9a8;
}
</style>
<template>
  <Layout id="contact" class="h-200">
    <div
      class="flex flex-col h-full w-full justify-center items-center -sm:mt-10"
    >
      <h1
        class="text-left text-6xl w-1/2 title -sm:text-4xl -md:w-full custom-color"
      >
        {{ _contact.title }}
      </h1>
      <a
        class="text-center button-primary"
        :href="`mailto:${_contact.email}`"
        >{{ _contact.button_text }}</a
      >
    </div>
    <div class="login-box">
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <center>
          <a href="#">
            SEND
            <span></span>
          </a>
        </center>
      </form>
    </div>
  </Layout>
</template>
