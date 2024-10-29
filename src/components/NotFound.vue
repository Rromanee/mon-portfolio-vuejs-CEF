<script setup>
console.log('NotFound component rendered');
</script>
  
<template>
  <div class="undefined">
    <h1>404</h1>
      <img src="../assets/images/404.png" alt="404" />
  </div>
</template>

<style scoped>
.undefined {
  background-color: lightcoral; 
  padding: 20px; 
  min-height: 100vh; 
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}

h1 {
  font-size: 3rem;
  text-align: center;
  color: white;
}
</style>