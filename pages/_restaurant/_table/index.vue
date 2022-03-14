<template>
  <div>
    <h1>{{ restaurantFound.restaurant.name }}</h1>
    <h2>Table N°{{ restaurantFound.table.number }}</h2>
  </div>
</template>

<script>
import {restaurants} from '~/static/data/restaurants.json'
export default {

  asyncData({params}) {
    return {
      allRestaurants : restaurants,
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
        table : ''
      }
    }
  },

  mounted() {
    this.get_restaurant()
  },

  methods : {
    get_restaurant() {
      var getRestaurant = this.allRestaurants.filter( element => element.id == this.paramsOptions.theRestaurantId)
      var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId)
      this.restaurantFound.restaurant = getRestaurant[0];
      this.restaurantFound.table = getTable[0];
    }
  }
}
</script>
