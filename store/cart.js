export const state = () => ({
    //store cart
    totalPrice : 0,
    isItems : false,
    items: [],
})

export const mutations = {
    //add item to cart
    add(state, payload) {
        state.items.push({
            product : payload,
        })
        state.totalPrice += payload.price
        state.isItems = true
    },

    //remove item from cart
    remove(state, payload) {
        state.items.splice(state.items.indexOf(payload), 1)
        state.totalPrice -= payload.price

        if(state.items.length == 0) {
          state.isItems = false
        }
    }
}
