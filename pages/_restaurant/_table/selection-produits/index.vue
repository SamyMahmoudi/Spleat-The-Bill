<template>

  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderPrice
      :idTable="restaurantFound.table.id"
      :idRestaurant="restaurantFound.restaurant.id"
      :tableNumber="restaurantFound.table.number"
      :totalPrice="billTotalPrice"
    />

    <!-- content -->
    <div class="main-selectProduct">

      <div>

        <div v-for="category in categories" :key="category.id" class="category-item">

          <h2>{{ category.name }}</h2>

          <div class="product-container">

            <CardProduct v-for="(product, index) in getCategoryProducts(category.name)"
              :productId="product.id"
              :productImg="product.picture"
              :productName="product.name"
              :productAmount="product.amount"
              :productPrice="product.price"
              :productCategory='category.name'
              :productIndex='index'
              class="product-card"
              :key="product.id"
            />

          </div>

        </div>

      </div>

    </div>

    <Panier />

  </div>

</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants.json';

export default {
  asyncData({ params }) {
    return {
      allRestaurants: restaurants,
      // get the params from the URL
      paramsOptions: {
        theRestaurantId: params.restaurant,
        theTableId: params.table,
      },
    };
  },
  data() {
    return {
      restaurantFound: {
        restaurant: "",
        table: "",
        menu: "",
      },
      isProducts : false,
      categories: [],
      billTotalPrice: "",
      orderedProducts: [],
      showForgotten: true,
      forgottenAmount: 1,
    };
  },
  mounted() {
    this.getData();
    if(this.restaurantFound.table.active === false) {
      this.$router.push('/error-page')
    };
  },
  methods: {
    getData() {
      // get the data of the restaurant which its corresponds to the params
      var getRestaurant = this.allRestaurants.filter(element => element.id == this.paramsOptions.theRestaurantId);
      this.restaurantFound.restaurant = getRestaurant[0];

      // get the data of the table which its corresponds to the params
      var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId);
      this.restaurantFound.table = getTable[0];
      var getProducts = this.restaurantFound.table.bill.bought_products;
      this.orderedProducts = getProducts[0];

      this.$store.commit('cart/get', this.orderedProducts);

      //get total price
      this.billTotalPrice = this.restaurantFound.table.bill.total_price;
      //get all categories
      var getCategories = this.restaurantFound.restaurant.categories;
      //only add to the table categories the one that have ordered products in them
      getCategories.forEach(category => {
        if (this.orderedProducts[category.name] != undefined) {
          this.categories.push(category);
        }
      });
    },
    getCategoryProducts(category) {
      return this.$store.state.cart.allItems[category]
    }
  },
}

</script>

<style lang="scss">
  #PageWrapper {
    min-height: 100vh;
    @include column;
  }

  .main-selectProduct
  {
    width: 95%;
    margin-left: 5%;
  }

  .category-item
  {
    margin-top: 30px;
    h2 {
      text-transform: uppercase;
      margin-left: 10px;
    }
  }

  .product-container {
    padding: 1em 0;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
