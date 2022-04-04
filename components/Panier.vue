<template>
    <div class="panier-container" v-if="isProducts">

        <div class="all-products">
          <CardProductThumbnail v-for="(item, index) in products"
            :key="item.product.name"
            :productImg="item.product.img"
            :productPrice="item.product.price"
            :productIndex="index"
          />
        </div>

        <NuxtLink :to="`/`" tag="button" class="btn btn-fill">
          Voir le récapitulatif : {{ totalPrice }} €
        </NuxtLink>
    </div>
</template>

<script>
export default {

  computed : {
    products() {
      return this.$store.state.cart.items;
    },

    isProducts() {
      return this.$store.state.cart.isItems
    },

    totalPrice() {
      return this.$store.state.cart.totalPrice
    }
  }
}
</script>

<style lang="scss" scoped>
.panier-container {
    padding-top: 30px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    position: sticky;
    bottom: 0;
    background-color: $bg-c--light-blue;

    .btn {
      width: 90%;
      margin-bottom: 30px;
    }

    .all-products {
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 30px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
}
</style>
