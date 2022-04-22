<template>
  <div class="container">
    <h1 class="title">Page erreur</h1>
    <img class="stb-logo" src="~/static/data/img/logo-spleat_the_bill.png" alt="Logo Spleat The Bill">
    <p class="error-message">Une erreur s'est produite.</p>
    <p class="error-message">Veuillez scanner le QR code une nouvelle fois.</p>
  </div>
</template>

<script>
  export default {
    props: ["error"],
    layout: "error"
  }
</script>

<style lang="scss" scoped>
  .container {
    @include center-total;
    flex-direction: column;
    margin: auto;
  }

  .title {
    text-transform: uppercase;
    text-align: center;
    padding: 2em 0;
    width: 100%;
    background-color: $c--secondary;
    color: white;
    border-radius: 0 0 20px 20px;
  }
  .stb-logo {
    max-width: 300px;
    width: 85%;
    margin: 2em 0;
  }

  .error-message {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    width: 90%;
  }

</style>