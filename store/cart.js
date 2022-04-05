export const state = () => ({
  //store cart
  totalPrice: 0,
  isItems: false,
  allItems: null,
  items: [],
})

export const mutations = {
  // get all items
  get(state, payload) {
    state.allItems = payload
  },

  //add item to cart
  add(state, payload) {

    if (state.items.length != 0) {
      var isNotAlready = false

      for (let i = 0; i < state.items.length; i++) {

        const element = state.items[i];

        if (element.product.id == payload.id) {
          element.product.amount += 1
          let actualProduct = state.allItems[payload.category].filter(
            product => product.id == payload.id
          )
          state.totalPrice += payload.price
          actualProduct[0].amount--;
          return

        } else {
          isNotAlready = true
        }
      }

      if (isNotAlready) {
        state.items.push({
          product: payload,
        })
      }

    } else {
      state.items.push({
        product: payload,
      })
    }

    let actualProduct = state.allItems[payload.category].filter(
      product => product.id == payload.id
    )
    actualProduct[0].amount--;

    state.totalPrice += payload.price
    state.isItems = true
  },

  //remove item from cart
  remove(state, payload) {

    // update the quantity of product
    let actualProduct = state.allItems[payload.category].filter(
      product => product.id == payload.id
    )
    actualProduct[0].amount++;

    // update the total price
    state.totalPrice -= payload.price

    // delete the product from items
    Array.prototype.remove = function(from, to) {
      var rest = this.slice((to || from) + 1 || this.length);
      this.length = from < 0 ? this.length + from : from;
      return this.push.apply(this, rest);
    };

    for (let i = 0; i < state.items.length; i++) {
      const element = state.items[i];

      if (element.product.id == payload.id) {

        if (element.product.amount > 1) {
          element.product.amount--;
          return
        } else {
          console.log(element.product.name + " " + element.product.amount)
          state.items.remove(i)
          if (state.items.length == 0) {
            state.isItems = false
            state.totalPrice = 0
          }
          return
        }
      }
    }
  }
}
