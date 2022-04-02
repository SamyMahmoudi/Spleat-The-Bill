<template>
  <div @click="addProduct">
    <div class="product-heading">
      <img :src="'/data/img/' + productImg" alt="Icon restaurant product">
      <span class="product-quantity">{{ productQuantity }}</span>
    </div>
    <h3 class="product-title">{{ productName }}</h3>
    <p class="product-footer">{{ productPrice }} €</p>
  </div>
</template>

<script>
export default {
  props : [
    'productId',
    'productImg',
    'productAmount',
    'productPrice',
    'productName'
  ],
  data() {
    return {
      isQuantityEmpty: false,
      productQuantity: this.productAmount
    }
  },
  methods: {
    addProduct() {
      if(this.productQuantity === 0) {
        
      }
      this.productQuantity--;
      var product = {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        img: this.productImg,
      };
      this.$store.commit('cart/add', product);
    }
  },
}
</script>

<style lang="scss" scoped>

  .product
  {
    &-heading {
      position: relative;
    }

    &-title {
      font-size: 14px;
      font-weight: 400;
      padding: 10px 0;
    }

    &-quantity {
      font-family: $f--content;
      color: white;
      position: absolute;
      background: $c--primary;
      bottom: 0px;
      right: 0;
      width: 20px;
      height: 20px;
      border-radius: 100%;
    }

    &-footer {
      padding-top: 30px;
      font-weight: 600;
      font-size: 18px;
    }
  }

</style>
