<template>
    <div id="PageWrapper">

        <!-- page header  -->
        <HeaderHome :restaurantLogo="restaurantFound.restaurant.logo" />

        <!-- content -->
        <main>
            <div class="wrapper-content">

                <div class="text-content">
                    <h2> A très bientôt ! </h2>
                    <!-- display the table's number -->
                    <p>La table n°{{ restaurantFound.table.number }}</p>
                    <p>a été réglé dans son intégralité</p>
                </div>
                
                <img id="ValidationLogo" src="~/static/images/validation-logo.png" alt="Logo de Validation">

            </div>
        </main>
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
    height: 50%;
    @include center-total;
    flex-direction: column;
    text-align: center;

    .text-content {
        text-align: center;
        padding-bottom: 40px;
        h2 {
            font-weight: 400;
            padding-bottom: 15px;
        }
    }

    #ValidationLogo {
        width: 40%;
        height: auto;
    }
    }

</style>