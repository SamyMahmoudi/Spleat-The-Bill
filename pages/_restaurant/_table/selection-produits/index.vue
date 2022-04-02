<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderPrice
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
              :productImg="category.picture"
              :productName="product.name"
              :productAmount="product.amount"
              :productPrice="product.price"
              class="product-card"
              :key="product.id"/>
          </div>
        </div>
        <!-- Forgotten products modal -->
        <div v-if="showForgotten" class="forgotten-container">
          <!-- If clicked on overlay, close the modal -->
          <div class="forgotten-overlay" @click="showForgotten = !showForgotten"></div>
          <div class="forgotten-products">
            <hr class="header-line">
            <!-- Check the number of forgotten products to adjust plural or singular -->
            <h2 v-if="forgottenAmount == 1">Il semblerait qu'un produit ait été oublié !</h2>
            <h2 v-else>Il semblerait que des produits aient été oubliés !</h2>
            <div class="product-container">
              <!-- Temporary data to be replaced with forgotten products array -->
              <CardProduct v-for="product in get_category_products('plats')"
              :productImg="categories[1].picture"
              :productName="product.name"
              :productAmount="product.amount"
              :productPrice="product.price"
              class="product-card"
              :key="product.id"/>
            </div>
            <a href="#" class="btn btn-fill">Ajouter les produits</a>
            <a href="#" class="close-link" @click="showForgotten = !showForgotten">Fermer</a>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants_simplified.json';
import HeaderPrice from '~/components/HeaderPrice.vue';

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
        },
    },
    components: { HeaderPrice }
}

</script>

<style lang="scss" scoped>

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
    padding: 20px 30px;
    width: 180px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    margin: 30px 30px 30px 10px;
    text-align: center;
    position: relative;
  }
}

.forgotten
{
  &-container {
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    position: fixed; 
    top: 0;
    left: 0;
    text-align: center;
  }
  &-overlay {
    width: 100%;
    height: 100%;
  }
  &-products {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 0 1em 1em 1em;
    border-radius: 15px 15px 0 0;

    .btn {
      margin-bottom: 1em;
    }
  }
  
  
}

.header-line {
  width: 30%;
  border: none;
  border-top: 5px solid #E7E7E7;
  border-radius: 15px;
  margin: 1.5em auto 2em auto;

}
.close-link {
    color: $c--primary;
    font-family: $f--content;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      right: 0;
      left: 0;
      height: 1px;
      bottom: -4px; 
		  width: 100%;
		  background: #E7E7E7;
    }
  }


</style>
