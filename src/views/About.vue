<script setup>
</script>

<template>
  <div class="presentation">
    <div class="presentation-left">
      <h2>Bonjour! Je m'appelle <br />
        Romane Duchant.</h2>
    </div>
    <div class="presentation-right">
      <h3>Je suis étudiante en développement web <br />
        - front-end et back-end</h3>
      <p>
        Je suis motivée à en apprendre plus sur les nouvelles technologies, à construire des applications faciles à utiliser et à résoudre des problématiques  à l'aide du code. <br />
        Bienvenue dans mon portfolio !
      </p>
    </div>
  </div>
</template>

<style scoped>
.presentation {
  display: flex;
  width: 100%;
  padding-top: 120px;
}

.presentation-left {
  flex: 1;
  background-color: #f2bac9;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 80px;
}

.presentation-right {
  flex: 1; 
  background-color: #575d90;
  color: #ffffff;
  display: flex;
  padding: 80px;
  flex-direction: column;
  text-align: center;
}

 h2 {
  font-size: 4rem;
  padding-top: 70px;
}

h3 {
  padding: 80px;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>