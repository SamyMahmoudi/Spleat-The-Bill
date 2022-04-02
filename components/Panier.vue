<template>
    <div class="panier-container">
        <div class="all-products">
            <div class="product">
                <span class="quantity">{{ productAmount }}</span>
                <img :src="'/data/img/icon-boisson.png'" alt="Icon restaurant product">
            </div>

            <div class="product">
                <span class="quantity">{{ productAmount }}</span>
                <img :src="'/data/img/icon-plat.png'" alt="Icon restaurant product">
            </div>
            
            <div class="product">
                <span class="quantity">{{ productAmount }}</span>
                <img :src="'/data/img/icon-dessert.png'" alt="Icon restaurant product">
            </div>
        </div>
        <nuxt-link :to="`/`" tag="button" class="btn btn-fill btn-recap">Voir le récapitulatif : {{ selectedPrice }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: "Panier",
    // add props
    props : [
        'selectedPrice'
    ]
}
</script>

<style lang="scss" scoped>
.panier-container {
    height: 200px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: $bg-c--light-blue;
    @include center-align;
    flex-direction: column;
    justify-content: space-evenly;
    
    .all-products {
        @include center-total;
        flex-direction: row;

        .product {
            margin: 0 15px;
            @include center-total;
            width: 50px;
            height: 50px;
            padding: 10px;
            background-color: white;
            border-radius: 5px;

            .quantity {
                font-family: $f--content;
                color: white;
                position: absolute;
                top: -10px;
                background: $c--primary;
                width: 20px;
                height: 20px;
                border-radius: 100%;
            }

            img {
                margin-top: 5px;
                height: 100%;
            }
        }
    }

    .btn-recap {
        width: 300px;
        margin: 0;
    }
}
</style>