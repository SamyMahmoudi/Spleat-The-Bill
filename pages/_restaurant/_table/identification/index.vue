<template>
  <div id="PageWrapper">

    <!-- page header  -->
    <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

    <!-- content -->
    <main>
      <div class="wrapper-content">
        <!-- display the table's number -->
        <h2> Table {{ restaurantFound.table.number }} </h2>

        <p>
          Saisissez votre prénom pour payer et partager votre addition.
        </p>

        <!-- Prevent reload of the page when submitted -->
        <form @submit.prevent>
          <input type="text" id="name" name="name"
            placeholder="Votre prénom"
            v-model.trim="username" required>

          <!-- Modify the button's style when input is empty and call the redirection function when clicked -->
          <button class="btn btn-fill" @click="redirect" :class="{ disabled : IsEmptyInput}" :disabled="IsEmptyInput">
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
      paramsOptions : {
        // Get path for specific restaurant and table
        fullPath : this.$route.path
      },
      restaurantFound : {
        restaurant : '',
        table : '',
        menu: '',
      },
      // input name
      username: '',
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
    },


    redirect() {
      // Check that the input is not empty
      if(!this.IsEmptyInput) {
        // Change url without adding an history step and pass the username
        this.$router.replace('selection-produits?name='+this.username)
      }
    },


  },
  computed: {
    IsEmptyInput() {
      // Check if username entered in input is empty and return true or false
      return this.username == ''
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
    font-weight: normal;
    font-size: 28px;
    padding-top: 10px;
  }

  p {
    padding-top: 15px;
    font-size: 18px;
  }

  form {
    input {
      margin-top: 60px;
      border: none;
      outline: none;
      width: 100%;
      border-bottom: solid gray 1px;
      padding-bottom: 8px;
      font-family: $f--content;
      font-size: 18px;
    }

    button {
      margin-top: 60px;
    }
  }
}

.disabled {
    background-color: gray;
    border: grey;
  }
</style>
