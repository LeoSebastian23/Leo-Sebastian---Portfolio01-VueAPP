<script setup>
import Layout from "../app/Layout.vue";
import emailjs from 'emailjs-com';

const enviarFormulario = async () => {
  try {
    const templateParams = {
      from_name: 'Nombre del remitente',
      to_name: 'Tu nombre',
      message_html: 'Contenido del mensaje'
    };

    // Reemplaza 'tu_service_id', 'tu_template_id' y 'tu_user_id' con tus propias credenciales de Email.js
    const response = await emailjs.send('tu_service_id', 'tu_template_id', templateParams, 'tu_user_id');

    console.log('Correo enviado con éxito:', response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};
</script>
<style>
.custom-size {
  font-size: 48px; /* Tamaño personalizado */
  margin-right: 10px;
}
</style>
<template>
  <Layout id="contact" class="h-200">
    <div class="login-box mt-2">
      <div class="flex justify-center items-center mb-10">
        <i class="bi bi-envelope custom-size"></i>
        <h1 class="text-center title text-zinc-200 not-italic">Hablemos!</h1>
      </div>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Nombre</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Correo electronico</label>
        </div>
        <div class="user-box">
          <textarea name="mensaje" required></textarea>
          <label>Mensaje</label>
        </div>
        <center>
          <a href="#" @click="enviarFormulario">
            SEND
            <span></span>
          </a>
        </center>
      </form>
    </div>
  </Layout>
</template>
