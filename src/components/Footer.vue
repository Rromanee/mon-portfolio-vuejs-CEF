<script setup>
const lastUpdated = new Date().toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>

<template>
    <footer class="footer" lang="fr">
      <p>© 2024 Mon Portfolio.</p>
      <div class="footer__socials">
        <a href="https://www.linkedin.com/in/romane-duchant/" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src="../assets/images/linkedin.png" 
        alt="logo de linkedin" 
        title="logo de linkedin"></a>
        <a href="https://github.com/Rromanee/" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src="../assets/images/signe-github.png" 
        alt="logo de github" 
        title="logo de github"></a>
      </div>
      <p>Dernière mise à jour : {{ lastUpdated }}</p>
      </footer>
  </template>
  
  <style scoped>
  .footer {
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
  
  .footer__socials img {
    width: 30px;
    height: 30px;
    align-items: flex-end;
  }
  .footer__socials {
    display: flex;
    justify-content: center;
    width: 112px;
    gap: 7px;
    margin: 20px auto;
    padding-left: 120px;

  }

  .footer__socials img:hover {
    cursor: pointer;
    opacity: 0.4;
  }

  </style>