<template>
    <div>
      <!-- Download the pdf menu corresponding to this restaurant -->
        <a :href="restaurantFound.restaurant.menu" class="btn btn-fill" :download="restaurantFound.restaurant.menu">Voir le menu</a>
    </div>
</template>

<script>
export default {
    name: "ButtonDownload",
    props: {
        restaurantFound: Object,
    },
  data() {
    return {
        paramsOptions : {
            fullPath : this.$route.path
      },
    }
  },

  mounted() {
    this.get_menu()
  },
  methods : {
    get_menu() {
      // Concatenate the path with the specifiç menu name
      let menu_url = '/data/docs/' + this.restaurantFound.restaurant.menu;
      this.restaurantFound.menu = menu_url;
      ;
      
    }
  }
}
</script>
