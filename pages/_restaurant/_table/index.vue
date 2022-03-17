<template>
  <div>
    <!-- display the restaurant's name -->
    <h1>
      {{ restaurantFound.restaurant.name }}
    </h1>
    <!-- display the table's number -->
    <h2>
      Table N°{{ restaurantFound.table.number }}
    </h2>
    
    <!-- Pass restaurant info to button and display it -->
    <button-download :restaurantFound ="restaurantFound"/>
    
    <!-- Pass table status to button -->
    <button-pay-home :active="restaurantFound.table.active"/>
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
