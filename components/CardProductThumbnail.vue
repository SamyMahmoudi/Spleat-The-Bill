<template>
  <div class="product" @click="removeProduct()">

    <span class="quantity">{{ productAmount }}</span>
    <img :src="'/data/img/' + productImg" alt="Icon restaurant product">

    <span class="cross-icon">
      &#10006;
    </span>

  </div>
</template>

<script>
export default {
  props : [
    'productAmount',
    'productImg',
    'productPrice',
    'productCategory',
    'productId'
  ],

  methods : {
    removeProduct() {

      var product = {
        price : this.productPrice,
        category : this.productCategory,
        id : this.productId
      }

      this.$store.commit('cart/remove', product);
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
    margin: 10px 15px;
    @include center-total;
    min-width: 70px;
    height: 70px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    position: relative;

    .quantity {
        font-family: $f--content;
        color: white;
        position: absolute;
        top: -10px;
        background: $c--primary;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        text-align: center;
    }

    .cross-icon {
        font-size: 10px;
        font-weight: 900;
        width: 10px;
        height: 10px;
        color: red;
        position: absolute;
        top: 5px;
        right: 5px;
    }

    img {
        margin-top: 5px;
        height: 100%;
    }
}
</style>
