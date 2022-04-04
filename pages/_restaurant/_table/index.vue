<template>
  <div id="PageWrapper">
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <main>
      <div class="wrapper-titles">
        <h2> Table {{ restaurantFound.table.number }} </h2><!-- display the table's number -->
      </div>

      <div class="wrapper-btn">
        <ButtonDownload :restaurantFound ="restaurantFound"/><!-- Pass restaurant info to button and display it -->
        <ButtonPayHome :active="restaurantFound.table.active"/> <!-- Pass table status to button -->
      </div>
    </main>

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
    font-weight: normal;
    font-size: 28px;
    padding-top: 10px;
  }
}

.wrapper-btn
{
  div:nth-of-type(1) {
    margin-top: 60px;
  }
  div:nth-of-type(2) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

</style>
