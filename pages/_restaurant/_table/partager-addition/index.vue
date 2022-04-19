<template>
  <div id="page-partagerAddition">

    <!-- page header  -->
    <HeaderPrice
      :idTable="restaurantFound.table.id"
      :idRestaurant="restaurantFound.restaurant.id"
      :tableNumber="restaurantFound.table.number"
      :totalPrice="billTotalPrice"
    />

    <main>
      <h1>Je règle pour :</h1>
      <div class="share-bill">
        <span @click="removeCustomer">-</span>
        <p>{{ numberCustomers }}
          <span v-if="numberCustomers == 1">couvert</span>
          <span v-else>couverts</span>
        </p>
        <span @click="addCustomer">+</span>
      </div>
    </main>

    <footer>
      <p>Total à régler</p>
      <span>{{ billCalculate }} €</span>
      <NuxtLink :to="`/${restaurantFound.restaurant.id}/${restaurantFound.table.id}/payment`"
      class="btn btn-fill">
        Je passe au paiement
      </NuxtLink>
    </footer>

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
            },
            billTotalPrice: "",
            calculatePrice : null,
            billCalculate : null,
            numberCustomers : 1,
        };
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
            var getRestaurant = this.allRestaurants.filter(element => element.id == this.paramsOptions.theRestaurantId);
            this.restaurantFound.restaurant = getRestaurant[0];
            // get the data of the table which its corresponds to the params
            var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId);
            this.restaurantFound.table = getTable[0];

            //get total price
            this.billTotalPrice = this.restaurantFound.table.bill.total_price;

            let customerPrice = this.billTotalPrice / this.restaurantFound.table.customers
            this.calculatePrice = Math.round(customerPrice * 100) / 100

            this.billCalculate = this.calculatePrice
        },

        removeCustomer() {
          if(this.numberCustomers >= 2) {
            this.numberCustomers --;
            this.billCalculate -= Math.round(this.calculatePrice * 100) / 100
          }
        },

        addCustomer() {
          if(this.numberCustomers <  this.restaurantFound.table.customers) {
            this.numberCustomers ++;
            if(this.numberCustomers == this.restaurantFound.table.customers) {
              this.billCalculate = this.billTotalPrice
            } else {
              this.billCalculate += this.calculatePrice
            }

          }
        }
    },
}

</script>

<style lang="scss" scoped>

#page-partagerAddition
{
  height: 100vh;
  background: white;

  main {

    h1 {
      padding: 60px 0 30px;
      font-size: 22px;
    }
  }

  footer {
    width: 90%;
    margin: 60px auto 0;
    p {
      font-size: 20px;
      text-align: center;
    }

    span {
      padding: 15px 0;
      display: block;
      text-align: center;
      font-size: 46px;
      font-family: $f--content;
      color: $c--primary;
    }
  }
}

.share-bill
{
  border-radius: 8px;
  box-shadow: -5px 10px 15px -3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;

  p {
    font-weight: bold;
  }

  &>span:nth-of-type(1) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border: solid $c--primary 2px;
    color: $c--primary;
    font-weight: bolder;
    border-radius: 100%;
    font-family: $f--content;
  }

  &>span:nth-of-type(2) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border: solid $c--primary 2px;
    background: $c--primary;
    color: white;
    font-weight: bolder;
    border-radius: 100%;
    font-family: $f--content;
  }
}


</style>
