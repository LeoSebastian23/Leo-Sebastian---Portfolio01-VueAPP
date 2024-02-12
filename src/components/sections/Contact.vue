<template>
  <Layout id="contact" class="h-200">
    <div class="login-box mt-2 ">
      <div class="flex justify-center items-center mb-10">
        <i class="bi bi-envelope custom-size"></i>
        <h1 class="text-center title text-zinc-200 not-italic">¡Hablemos!</h1>
      </div>
      <form @submit.prevent="submitForm">
        <div class="user-box">
          <input type="text" v-model="formData.nombre" required />
          <label>Nombre</label>
        </div>
        <div class="user-box">
          <input type="email" v-model="formData.email" required />
          <label>Correo electrónico</label>
        </div>
        <div class="user-box">
          <textarea v-model="formData.mensaje" required></textarea>
          <label>Mensaje</label>
        </div>
        <center>
          <button type="submit">Enviar</button>
        </center>
      </form>
      <!-- Mensaje de confirmación -->
      <div v-if="showConfirmationMessage" class="confirmation-message">
        Correo enviado con éxito
      </div>
      <!-- End Mensaje de confirmación -->
    </div>
  </Layout>
</template>

<script>
import Layout from "../app/Layout.vue";
import emailjs from "emailjs-com";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailApiKey = import.meta.env.VITE_EMAILJS_API_KEY;
const emailDestino = import.meta.env.VITE_EMAIL_DESTINO;
emailjs.init(emailApiKey);

export default {
  components: {
    Layout,
  },
  data() {
    return {
      formData: {
        nombre: "",
        email: "",
        mensaje: "",
      },
      showConfirmationMessage: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const templateParams = {
          from_name: this.formData.nombre,
          to_name: emailDestino,
          message: this.formData.mensaje,
          reply_to: this.formData.email,
        };

        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams
        );

        console.log("Correo enviado con éxito:", response);

        // Mostrar mensaje de confirmación
        this.showConfirmationMessage = true;

        // Reiniciar el formulario después de 3 segundos
        setTimeout(() => {
          this.resetForm();
        }, 3000);
      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
    },
    resetForm() {
      // Resetear el formulario y ocultar el mensaje de confirmación
      this.formData.nombre = "";
      this.formData.email = "";
      this.formData.mensaje = "";
      this.showConfirmationMessage = false;
    },
  },
};
</script>

<style>
.confirmation-message {
  position: fixed;
  bottom: 20px;
  left: 10%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1200;
}
</style>

