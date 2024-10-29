<script setup>
import { defineProps, defineEmits } from 'vue'

// Receive project data as a prop
const props = defineProps({
  project: Object
})

// Emit an event to close the modal
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      
      <div class="photo-section">
        <!-- Display images stacked vertically -->
        <img v-for="(img, index) in project.images" 
        :key="index" :src="img" 
        :alt="`Image ${index + 1}`" />
      </div>

      <div class="details-section">
        <h2>{{ project.title }}</h2>
        <p class="date-tech">{{ project.date }} | {{ project.technology }}</p>
        <p class="description">{{ project.description }}</p>
        <a :href="project.link" target="_blank">Voir le Project</a>
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  background-color: #FFF;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
}

.photo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.photo-section img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 4px;
}

.details-section {
  flex: 2;
  padding-left: 20px;
  color: #333;
}

h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.date-tech {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.description {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

a {
  color: #575D90;
  text-decoration: none;
}

.close-button {
  position:absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>