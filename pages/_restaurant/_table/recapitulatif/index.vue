<template>
    <div id="PageWrapper">
        <HeaderRecap
            :totalPrice="totalPrice"
            :paramsRestaurant="paramsOptions.theRestaurantId"
            :paramsTable="paramsOptions.theTableId"
        />

        <h2 class="title">Mon repas</h2>

        <div class="product-container">
            <CardProductRecap v-for="product in storeItems"
                :productId="product.product.id"
                :productImg="product.product.img"
                :productName="product.product.name"
                :productAmount="product.product.amount"
                :productPrice="product.product.price"
                :productCategory="product.product.category"
                :productIndex='product.product.index'
                class="product-card"
                :key="product.product.id"/>

            <nuxt-link :to="`selection-produits`" class="add-btn">
                <nuxt-link :to="`selection-produits`"><img src="/images/add-logo-recap.png" alt="add product logo"></nuxt-link>
                <nuxt-link class="add-click" :to="`selection-produits`">ajouter un produit</nuxt-link>
            </nuxt-link>

        </div>
        <button
            @click="checkItems"
            class="btn btn-fill">Payer {{ Math.round(totalPrice * 100) / 100 }} €
        </button>
        <ForgottenProducts
            v-if="showForgotten"
            @closed="showForgotten = !showForgotten; forgotItems = []"
            :products="forgotItems"
            :show="showForgotten"
        />
    </div>
</template>

<script>
  // import fake datas
    import {
        restaurants
    } from '~/static/data/restaurants.json';

export default {

    asyncData({params})
    {
        return {
            allRestaurants: restaurants,
            // get the params from the URL
            paramsOptions: {
                theRestaurantId: params.restaurant,
                theTableId: params.table,
            },
        }
    },

    data() {
        return {
            iconPlat: "icon-plat.png",
            iconBoisson: "icon-boisson.png",
            showForgotten : false,
            forgotItems: [],
            restaurantFound: {
                restaurant: '',
                table: '',
                menu: '',
            },
        }
    },
    computed: {
        fullPath() {
            return  "/" + this.$route.params.restaurant + "/" + this.$route.params.table
        },
        totalPrice() {
            return this.$store.state.cart.totalPrice
        },
        storeItems() {
            if(this.$store.state.cart.items.length != 0) {
                return this.$store.state.cart.items
            }else {
                this.$router.replace('selection-produits')
            }
        }
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
            var getRestaurant = this.allRestaurants.filter(element => element.id == this.paramsOptions.theRestaurantId)
            this.restaurantFound.restaurant = getRestaurant[0];

            // get the data of the table which its corresponds to the params
            var getTable = getRestaurant[0].tables.filter(element => element.id == this.paramsOptions.theTableId)
            this.restaurantFound.table = getTable[0];
        },
        checkItems() {
            var allItems = this.$store.state.cart.allItems
            for(const category in allItems) {
                allItems[category].forEach(product => {
                    if(product.amount != 0) {
                        product.category = category;
                        this.forgotItems.push(product)
                    }
                })
            }
            if (this.forgotItems.length > 0) {
                this.showForgotten = true;
            } else {
                this.$router.replace('payment')
            }
        }
    },
}
</script>

<style lang="scss" scoped>

#PageWrapper {
    @include column;
    min-height: 100vh;
    margin-bottom: 30px;
}

.title {
    margin-top: 30px;
    margin-left: 20px;
}

.product
{
    &-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
    &-card {
        // padding: 10px 20px;
        width: 120px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        margin: 10px;
        text-align: center;
        position: relative;
        img {
            width: 120px;
        }
    }
}

.add
{
    &-product {
        width: 160px;
        height: 235px;
        margin: 10px;
        @include center-total;
        flex-direction: column;
    }
    &-container {
        width: 40px;
        height: 40px;
        border-radius: 99px;
        background-color: $c--primary;
        @include center-total;
        margin-bottom: 15px;
    }
    &-icon {
        color: white;
        font-size: 40px;
        font-weight: 900;
        border-radius: 15px;
    }
    &-text {
        width: 70%;
        text-align: center;
    }
}
.add-btn {
    max-width: 120px;
    min-width: 120px;
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px;

    img {
        width: 33px;
        height: 33px;
    }
    .add-click {
        color: $c--primary;
        font-family: $f--content;
        text-align: center;
        width: 70%;
    }
}
</style>
