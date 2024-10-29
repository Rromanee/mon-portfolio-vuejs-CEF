<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import CV from '../assets/images/CV.png'
import CV_1 from '../assets/images/CV_1.png'
import CV_2 from '../assets/images/CV_2.png'
import Cahier from '../assets/images/Cahier.png'
import Cahier_1 from '../assets/images/Cahier_1.png'
import Cahier_2 from '../assets/images/Cahier_2.png'
import Commentaires from '../assets/images/Commentaires.png'
import Comment_1 from '../assets/images/Comment_1.png'
import Comment_2 from '../assets/images/Comment_2.png'

const creations = [
  {
    title: 'CV',
    date: '11-04-2024',
    technology: 'HTML, CSS, GitHub',
    description:'Un CV mettant en valeur des compétences en matière de développement web réalisé en utilisant les langages HTML et CSS.',
    image: CV,
    images: [CV_1, CV_2],
    link: 'https://github.com/Rromanee/CV---CEF'
  },
  {
    title: 'Cahier des Charges',
    date: '16-10-2024',
    description: 'Ce cahier des charges détaille les spécifications nécessaires pour la création d‘un site web performant pour l’entreprise fictive « la Socketterie ».',
    image: Cahier,
    images: [Cahier_1, Cahier_2],
    link: './public/Cahier_des_charges.pdf'
  },
  {
    title: 'Espace Commentaires',
    date: '19-08-2024',
    technology: 'Javascript',
    description:'Une section de commentaires dynamique qui permet aux utilisateurs de publier des commentaires',
    image: Commentaires,
    images: [Comment_1, Comment_2],
    link: 'https://github.com/Rromanee/-DynamiserUnEspaceDeCommentaires_CEF'
  }
]

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}
</script>

<template>
  <h2>Mes Projets</h2>
  <section class="creations">
    <div class="creation" v-for="(creation, index) in creations" 
    :key="index" @click="openModal(creation)">
      <img :src="creation.image" 
      :alt="creation.title" />
      <h3>{{ creation.title }}</h3>
    </div>

    <Modal v-if="selectedProject" 
    :project="selectedProject" 
    @close="selectedProject = null" />
  </section>
</template>

<style scoped>
.creations {
  display: flex;
  justify-content: space-around;
}

.creation {
  text-align: center;
}

h2 {
  padding-top: 250px;
}
.creation img {
  width: 100%;                
  max-width: 200px;           
  border-radius: 8px; 
  transition: box-shadow 0.3s ease;        
}

.creation img:hover {
  box-shadow: 6px 6px 2px 1px #000 ;
  cursor: pointer; 
}
</style>