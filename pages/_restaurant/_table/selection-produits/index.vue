<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <!-- content -->
    <main>
      <!-- <div class="wrapper-content">
        <div v-for="category in categories" :key="category.id">
          <h2>{{ category.name }}</h2>
          <div v-for="product in orderedProducts" :key="product.id">
            <p>{{ product. }}</p>
            <p><span>{{ get_bill_product_info(product.id)[0].amount }}</span></p>
          </div>
        </div>
      </div> -->
      <div class="wrapper-content">
        <div v-for="category in categories" :key="category.id">{{ category.name }}
          <div v-for="product in get_category_products(category.name)" :key="product.id">
            {{ product.name }}
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants_simplified.json';

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
      },
      categories : '',
      bill: '',
      orderedProducts: [],
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

      var getCategories = this.restaurantFound.restaurant.categories;
      this.categories = getCategories;

      var getProducts = this.restaurantFound.table.bill.bought_products
      this.orderedProducts = getProducts[0]
    },
    get_category_products(category) {
      var getProducts = this.orderedProducts[category]
      return getProducts;
    },
    
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

</style>