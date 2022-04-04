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
    <main>
      <div class="wrapper-content">
        <div v-for="category in categories" :key="category.id" class="category-item">
          <h2>{{ category.name }}</h2>
          <div class="product-container">
            <CardProduct v-for="product in get_category_products(category.name)" 
              :productId="product.id"
              :productImg="category.picture"
              :productName="product.name"
              :productAmount="product.amount"
              :productPrice="product.price"
              class="product-card"
              :key="product.id"/>
          </div>
        </div>

        <ForgottenProducts
          v-if="showForgotten"
          @closed="showForgotten = !showForgotten"
          :products="get_category_products('plats')"
          :categories="categories"
          :show="showForgotten"/>
      </div>
      <div v-for="item in items" :key="item.index" class="summary-content">
        <div class="product-container">
          <img :src="`/data/img/${item.product.img}`" alt="icon item">
        </div>
      </div>
      <p>{{totalPrice}}</p>
    </main>

  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants_simplified.json';

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
            testModel: "",
            categories: [],
            billTotalPrice: "",
            orderedProducts: [],
            showForgotten: true,
            forgottenAmount: 1,
        };
    },
    mounted() {
        this.get_data();
    },
    computed: {
      items() {
        return this.$store.state.cart.items;
      },
      totalPrice() {
        return this.$store.getters.totalPrice;
      }
    },
    methods: {
        get_data() {
            // get the data of the restaurant which its corresponds to the params
            var getRestaurant = this.allRestaurants.filter(element => element.id == this.paramsOptions.theRestaurantId);
            this.restaurantFound.restaurant = getRestaurant[0];
            // get the data of the table which its corresponds to the params
            var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId);
            this.restaurantFound.table = getTable[0];
            var getProducts = this.restaurantFound.table.bill.bought_products;
            this.orderedProducts = getProducts[0];
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
        get_category_products(category) {
            var getProducts = this.orderedProducts[category];
            return getProducts;
        }
    },
    components: { HeaderPrice, ForgottenProducts }
}

</script>

<style lang="scss">

#PageWrapper {
  @include column;

  main {
    width: 90%;
    margin: 0 auto;
  }
}

.category-item
{
  margin-top: 30px;
  h2 {
    text-transform: uppercase;
    margin-left: 10px;
  }
}

.product
{
  &-container {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &-card {
    cursor: pointer;
    padding: 20px 30px;
    width: 180px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    margin: 30px 30px 30px 10px;
    text-align: center;
    position: relative;
  }
}


</style>
