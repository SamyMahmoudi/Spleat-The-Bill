<template>
    <div class="header-container">
      <img :src="'/data/img/' + restaurantLogo" alt="logo restaurant">
    </div>
</template>

<script>
export default {
  props : {
    restaurantLogo : String
  }
}
</script>

<style scoped lang="scss">
    .header-container {
        @include center-total;
        background-color: $c--secondary;
        img {
            padding: 0.5em;
            width: auto;
            height: 100px;
        }
    }

</style>
