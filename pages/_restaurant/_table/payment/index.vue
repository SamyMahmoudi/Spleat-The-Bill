<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <!-- content -->
    <main>
      <div class="wrapper-content">

        <div class="text-content">
          <!-- display username -->
          <h2> Merci <span class="username">{{ username }}</span> ! </h2>
          <!-- display the table's number -->
          <p>La table n°{{ restaurantFound.table.number }}</p>
          <p>a été réglé dans son intégralité</p>
          <h2> A très bientôt ! </h2>
        </div>

        <img id="ValidationLogo" src="~/static/images/validation-logo.png" alt="Logo de Validation">

      </div>
    </main>
  </div>
</template>

<script>
  // import fake datas
  import {
    restaurants
  } from '~/static/data/restaurants.json';

  export default {

    asyncData({params})
    {
      return {
        allRestaurants: restaurants,
        // get the params from the URL
        paramsOptions: {
          theRestaurantId: params.restaurant,
          theTableId: params.table,
        },
      }
    },

    data() {
      return {
        restaurantFound: {
          restaurant: '',
          table: '',
          menu: '',
        },
        username: '',
      }
    },

    mounted() {
      this.get_data();
      if(this.restaurantFound.table.active === false) {
        this.$router.push('/error-page')
      };
    },

    methods: {
      get_data() {
        // get the data of the restaurant which its corresponds to the params
        var getRestaurant = this.allRestaurants.filter(element => element.id == this.paramsOptions.theRestaurantId)
        this.restaurantFound.restaurant = getRestaurant[0];

        // get the data of the table which its corresponds to the params
        var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId)
        this.restaurantFound.table = getTable[0];

        this.username = this.$store.state.authentication.name;
      },
    }
  }

</script>

<style lang="scss" scoped>
  #PageWrapper {
    height: 100vh;
    @include column;
  }

  .wrapper-content {
    padding-top: 50px;
    @include center-total;
    flex-direction: column;
    text-align: center;

    .text-content {
      text-align: center;
      padding-bottom: 40px;

      h2 {
        font-weight: 400;
        padding-bottom: 15px;
        padding-top: 15px;
      }

      .username {
        font-weight: 700;
      }
    }

    #ValidationLogo {
      width: 150px;
      height: auto;
    }
  }

</style>
