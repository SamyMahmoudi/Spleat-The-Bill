<template>
    <div class="panier-container" v-if="isProducts">

        <div class="all-products">
          <CardProductThumbnail v-for="item in products"
            :key="item.product.name"
            :productImg="item.product.img"
            :productPrice="item.product.price"
            :productCategory="item.product.category"
            :productAmount="item.product.amount"
            :productId="item.product.id"
          />
        </div>

        <NuxtLink :to="`${fullPath}/recapitulatif`" class="btn btn-fill">
          Voir le récapitulatif : {{ totalPrice }} €
        </NuxtLink>

    </div>
</template>

<script>
export default {
  computed : {
    fullPath() {
      return  "/" + this.$route.params.restaurant + "/" + this.$route.params.table
    },

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
