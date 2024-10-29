<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  subject: '',
  message: ''
});

const submitForm = async () => {
  const recipientEmail = import.meta.env.VITE_EMAIL_RECIPIENT;

  const emailData = {
    to: recipientEmail,
    subject: form.value.subject,
    body: `Nom : ${form.value.name}\n\nMessage : ${form.value.message}`
  };

  try {
    await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });
    
    form.value.name = '';
    form.value.subject = '';
    form.value.message = '';

    alert('Message envoyé avec succès !');
    
  } catch (error) {
    alert('Erreur lors de l\'envoi du message.');
  }
};
</script>

<template>
  <div class="contact-form">
    <h2>Contactez-moi</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom / Prénom</label>
        <input type="text" 
        v-model="form.name" 
        id="name" 
        required autocomplete="name"/>
      </div>
      <div>
        <label for="subject">Objet</label>
        <input type="text" 
        v-model="form.subject" 
        id="subject" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea v-model="form.message" 
        id="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 60px;
}

h2 {
  padding-top: 180px;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #575D90; 
  border-color:#FFF;
  color: #FFF;
}

button {
  background-color: #F2BAC9;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  color: #000;
  padding: 0.7rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
}

button:hover {
  background-color: #BAD7F2;
  border-color: #F2BAC9;
}

</style>