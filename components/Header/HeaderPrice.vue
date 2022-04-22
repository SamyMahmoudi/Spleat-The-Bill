<template>
    <div class="header-container">
        <div class="header-text">
            <p class="table">Table {{ tableNumber }}</p>
            <h3 class="price">{{ totalPrice }} €</h3>
        </div>

        <div class="header-links">
            <nuxt-link :to="`/${idRestaurant}/${idTable}/selection-produits`" tag="button" class="btn btn-regular price-link">Régler ma part</nuxt-link>
            <nuxt-link :to="`/${idRestaurant}/${idTable}/partager-addition`" tag="button" class="btn btn-regular price-link">Partager l'addition</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

    props : [
      'tableNumber',
      'totalPrice',
      'idRestaurant',
      'idTable'
    ]
}

</script>

<style scoped lang="scss">

    .header-container {
        display: flex;
        padding: 2em 0 1em;
        justify-content: flex-end;

        .arrow-previous {
            fill: white;
            width: 25px;
            height: auto;
            transform: rotate(135deg);
            color: white;
            position: absolute;
            top: 30px;
            left: 20px;
        }

        .header-text {
            @include center-total;
            flex-direction: column;
            p, h3 {
                margin-bottom: 10px;
                color: white;
            }
            h3 {
                margin-bottom: 1em;
            }
            .price {
                font-size: 30px;
                font-weight: 400;
            }
        }

        .header-links {
            width: 100%;
            @include center-align;
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 10px;

            .price-link {
                width: 40%;
                border: none;
                font-size: 12px;
                background-color: $c--primary;
                color: #fff;

                &.nuxt-link-active {
                    background-color: #fff;
                    color: $c--primary;
                }
            }
        }
    }

</style>
