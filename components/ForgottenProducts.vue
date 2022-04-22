<template>
    <!-- Forgotten products modal -->
    <div class="forgotten-container">
      <!-- If clicked on overlay, close the modal -->
      <div class="forgotten-overlay" @click="$emit('closed')"></div>
      <div class="forgotten-products">
        <hr class="header-line">
        <!-- Check the number of forgotten products to adjust plural or singular -->
        <h2 v-if="products.length == 1">Il semblerait qu'un produit ait été oublié !</h2>
        <h2 v-else>Il semblerait que des produits aient été oubliés !</h2>
        <div class="product-container">
          <!-- Temporary data to be replaced with forgotten products array -->
          <CardProductForgot @removed="forgottenItemsRemove" v-for="product in forgottenProducts"
          :productId="product.id"
          :productImg="product.picture"
          :productName="product.name"
          :productAmount="product.amount"
          :productPrice="product.price"
          :productCategory="product.category"
          class="product-card"
          :key="product.id"/>
        </div>
        <button @click="addAll" class="btn btn-fill">Ajouter les produits</button>
        <a class="close-link" @click="$emit('closed')">Fermer</a>
      </div>
    </div>
</template>

<script>
export default {
    props: [
        "products",
        "show"
    ],
    data() {
      return {
        forgottenProducts: this.products,
      }
    },
    methods: {
      forgottenItemsRemove(product) {

        let itemToRemove = null;

        this.forgottenProducts.forEach(item => {
          if(item.id == product.id) {
            itemToRemove = item;
          }
        })

        for(var i = 0; i < this.forgottenProducts.length; i++){ 
          // Delete from forgotten products
          if ( this.forgottenProducts[i].id === itemToRemove.id) {
              this.forgottenProducts.splice(i, 1);

              if(this.forgottenProducts.length === 0) {
                this.$emit('closed');
              }
          }
        }
      },
      addAll() {
        this.forgottenProducts.forEach(item => {
          while(item.amount > 0) {
            var product = {
              index : item.index,
              id: item.id,
              name: item.name,
              price: item.price,
              img: item.picture,
              category: item.category,
              amount : 1
            };
            this.$store.commit('cart/add', product);
            }
          },          
        )
        this.forgottenProducts = [];
        this.$emit('closed');
      }
    }
}
</script>

<style lang="scss">
.forgotten
{
  &-container {
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    position: fixed; 
    top: 0;
    left: 0;
    text-align: center;
  }
  &-overlay {
    width: 100%;
    height: 100%;
  }
  &-products {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 0 1em 1em 1em;
    border-radius: 15px 15px 0 0;

    .btn {
      margin-bottom: 1em;
    }
  }
  
  
}

.header-line {
  width: 30%;
  border: none;
  border-top: 5px solid #E7E7E7;
  border-radius: 15px;
  margin: 1.5em auto 2em auto;

}
.close-link {
    color: $c--primary;
    font-family: $f--content;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      right: 0;
      left: 0;
      height: 1px;
      bottom: -4px; 
		  width: 100%;
		  background: #E7E7E7;
    }
  }
</style>
