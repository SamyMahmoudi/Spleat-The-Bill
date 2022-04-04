<template>
  <div @click="addProduct" :class="[{ disabled : isNoQuantity }, 'product']">
    <div class="product-heading">
      <img :src="'/data/img/' + productImg" alt="Icon restaurant product">
      <span class="product-quantity" v-if="productQuantity != 0">{{ productQuantity }}</span>
    </div>
    <h3 class="product-title">{{ productName }}</h3>
    <p class="product-footer">{{ productPrice }} €</p>
  </div>
</template>

<script>
export default {
  props : [
    'productIndex',
    'productId',
    'productImg',
    'productAmount',
    'productPrice',
    'productName'
  ],
  data() {
    return {
      productQuantity: this.productAmount,
      isNoQuantity : false
    }
  },
  methods: {
    addProduct() {

      var product = {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        img: this.productImg,
      };

      if(this.productQuantity >= 1) {
        this.productQuantity--;
        this.$store.commit('cart/add', product);

        if(this.productQuantity == 0) {
          this.isNoQuantity = true
        }
      }

    }
  },
}
</script>

<style lang="scss" scoped>

  .product
  {
    cursor: pointer;
    min-width: 150px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 0.5em 1em 0;
    text-align: center;
    border-radius: 10px;
    position: relative;
    margin-right: 20px;

    &-heading {
      position: relative;
      img {
        height: 60px;
      }
    }

    &-title {
      font-size: 14px;
      font-weight: normal;
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
      padding-top: 10px;
      font-weight: 600;
      font-size: 18px;
    }

  }

  .disabled {
    cursor: not-allowed;
    &:after {
      background-color: rgb(124, 124, 124);
    }
  }

</style>
