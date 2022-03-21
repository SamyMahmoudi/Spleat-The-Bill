<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <!-- content -->
    <main>
      <div class="wrapper-content">
        <!-- display the table's number -->
        <h2> Table N°{{ restaurantFound.table.number }} </h2>

        <p>
          Saisissez votre prénom pour payer et partager votre addition.
        </p>

        <form>
          <input type="text" name="name" id="name"
            placeholder="Votre prénom"
            v-model="username">

          <button type="submit" class="btn btn-fill">
            Continuer
          </button>
        </form>

      </div>
    </main>

    <!-- page footer -->
    <FooterHome />

  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants.json';

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
      // input name
      username: ''
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

.wrapper-content {
  padding-top: 30px;
  text-align: center;

  h2 {
    text-transform: uppercase;
  }

  p {
    padding-top: 15px;
  }

  form {
    input {
      margin-top: 30px;
      border: none;
      outline: none;
      width: 100%;
      border-bottom: solid gray 1px;
      padding-bottom: 8px;
    }

    button {
      margin-top: 30px;
    }
  }
}

</style>
