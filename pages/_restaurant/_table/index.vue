<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <!-- content -->
    <main>
      <div class="wrapper-titles">
        <!-- display the restaurant's name -->
        <!-- <h1> {{ restaurantFound.restaurant.name }} </h1> -->

        <!-- display the table's number -->
        <h2> Table N°{{ restaurantFound.table.number }} </h2>
      </div>

      <div class="wrapper-btn">
        <!-- Pass restaurant info to button and display it -->
        <ButtonDownload :restaurantFound ="restaurantFound"/>
        <!-- Pass table status to button -->
        <ButtonPayHome :active="restaurantFound.table.active"/>
      </div>
    </main>

    <!-- page footer -->
    <FooterHome />

  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants.json'

export default {
  asyncData({params}) {
    return {
      allRestaurants : restaurants,
      // get the params from the URL
      paramsOptions : {
        theRestaurantId : params.restaurant,
        theTableId : params.table,
      },
    }
  },

  data() {
    return {
      restaurantFound : {
        restaurant : '',
        table : '',
        menu: '',
      }
    }
  },

  mounted() {
    this.get_data()
  },

  methods : {
    get_data() {
      // get the data of the restaurant which its corresponds to the params
      var getRestaurant = this.allRestaurants.filter( element => element.id == this.paramsOptions.theRestaurantId)
      this.restaurantFound.restaurant = getRestaurant[0];

      // get the data of the table which its corresponds to the params
      var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId)
      this.restaurantFound.table = getTable[0];
    }
  }
}
</script>

<style lang="scss" scoped>

#PageWrapper {
  height: 100vh;
  @include column;

  main {
    flex: 1;
    width: 90%;
    margin: 0 auto;
  }
}

.wrapper-titles
{
  padding-top: 30px;
  text-align: center;

  h2 {
    text-transform: uppercase;
  }
}

.wrapper-btn
{
  div {
    margin-top: 30px;
  }
}

</style>
