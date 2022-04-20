<template>
    <div>
        <!-- Download the pdf menu corresponding to this restaurant -->
        <a :href="'/data/docs/' + restaurantFound.restaurant.menu" class="btn btn-fill" download>Voir le menu</a>
    </div>
</template>

<script>
export default {
  name: "ButtonDownload",
  // props
  props: {
    restaurantFound: Object,
  },
}
</script>
