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
        padding: 2em 0;
        border-radius:0 0 20px 20px;
        img {
            width: auto;
            height: 100px;
        }
    }

</style>
