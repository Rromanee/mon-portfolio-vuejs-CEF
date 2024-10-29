<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Contact from './Contact.vue';
import Projects from './Projects.vue';
import About from './About.vue';
import Welcome from './Welcome.vue';

</script>

<template>
  <div>
    <Header />

    <main>
      <section id="accueil">
        <Welcome />
      </section>

      <section id="presentation">
        <About />
      </section>

      <section id="creations">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
</template>

<style>
html, body {
  background-color: #BAD7F2;
}

</style>