<template>
    <div class="header-container">
        <NuxtLink :to="`/${idRestaurant}/${idTable}/identification`">
        <!-- <NuxtLink to="/identification"> -->
          <svg class="arrow-previous" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 242.133 242.133" style="enable-background:new 0 0 242.133 242.133;" xml:space="preserve"><path id="XMLID_24_" d="M190.919,212.133h-69.853c-8.284,0-15,6.716-15,15s6.716,15,15,15h106.065c8.284,0,15-6.716,15-15V121.066 c0-8.284-6.716-15-15-15s-15,6.716-15,15v69.854L25.607,4.394c-5.858-5.858-15.356-5.858-21.213,0 c-5.858,5.858-5.858,15.356,0,21.213L190.919,212.133z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </NuxtLink>

        <div class="header-text">
            <p class="table">Table {{ tableNumber }}</p>
            <h3 class="price">{{ totalPrice }} €</h3>
        </div>

        <div class="header-links">
            <nuxt-link :to="`/`" tag="button" class="btn btn-regular price-link">Régler ma part</nuxt-link>
            <nuxt-link :to="`/`" tag="button" class="btn disabled" disabled>Partager l'addition</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    // add props
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
        flex-direction: column;
        background-color: $c--secondary;
        border-radius: 0 0 20px 20px;

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
                font-size: 14px;
            }

            .disabled {
                width: 40%;
                background-color: transparent;
                border: none;
                color: rgba($color: #ffffff, $alpha: 0.5);
                font-size: 14px;
            }
        }
    }

</style>
