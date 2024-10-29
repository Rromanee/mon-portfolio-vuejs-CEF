<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')

const handleScroll = () => {
  const sections = document.querySelectorAll('section')
  let currentSection = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100 
    const sectionBottom = sectionTop + section.offsetHeight 

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute('id')
    }
  })

  activeSection.value = currentSection
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const setActive = (sectionId) => {
  activeSection.value = sectionId;
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <header class="header">
    <nav>
      <a href="#presentation" 
         class="nav-menu-left" 
         :class="{ active: activeSection === 'presentation' }" 
         @click="setActive('presentation')">Présentation</a>
      <a href="#creations" 
         class="nav-menu-left" 
         :class="{ active: activeSection === 'creations' }" 
         @click="setActive('creations')">Projets</a>
      <a href="#contact" 
         class="nav-menu-left" 
         :class="{ active: activeSection === 'contact' }" 
         @click="setActive('contact')">Contact</a>
    </nav>
    <nav>
      <a href="#" class="nav-menu-middle" 
      :class="{ active: activeSection === 'accueil' }" 
      @click="setActive('accueil')">Accueil</a>
    </nav>
    <div class="logo" @click="scrollToTop">
      <img src="../assets/images/logo.png" alt="Mon Logo" class="circle"/>
    </div>
  </header>
</template>

<style scoped>  
.header {
    background-color: #575D90; 
    opacity: 0.5;
    border-radius: 50px;
    padding: 10px 20px; 
    margin: 15px 0px;     
    display: flex;
    align-items: center;
    justify-content:space-between;
    position: sticky;
    top: 20px;
    bottom: 50px;
    z-index: 10;
}

.nav-menu-left{
  padding-right: 20px;
  color: white;
  text-decoration: none;
}

.nav-menu-left.active,
.nav-menu-middle.active{
  text-decoration: underline; 
  color: white;
}

.nav-menu-middle {
  display: flex;
  padding-right: 210px;
  text-decoration: none;
  color: white;
}

.logo img {
  width: 50px; 
  height: auto;
}
.logo:hover{
  cursor: pointer;
  opacity: 1;
}

</style>