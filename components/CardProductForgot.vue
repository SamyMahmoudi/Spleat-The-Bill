<template>
  <div class="product">
    <div class="product-heading">
      <img :src="'/data/img/' + productImg" alt="Icon restaurant product">
      <span class="product-quantity">{{ productAmount }}</span>
    </div>
    <h3 class="product-title">{{ productName }}</h3>
    <p class="product-footer">{{ productPrice }}€</p>
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
    'productName',
    'productCategory'
  ],
}
</script>

<style lang="scss" scoped>

  .product
  {
    cursor: pointer;
    min-width: 120px;
    max-width: 120px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 1em 1em 0;
    text-align: center;
    border-radius: 8px;
    position: relative;
    margin-right: 20px;
    border: solid 0.5px hsla(0, 0%, 44%, 0.1);

    .cross-icon {
        font-size: 1em  ;
        font-weight: 900;
        width: 10px;
        height: 10px;
        color: red;
        position: absolute;
        top: 0;
        right: 0;
    }

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
      right: 0px;
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
