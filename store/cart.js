export const state = () => ({
    //store cart
    items: [],
    price : 0
})

export const getters = {
    //get total price
    totalPrice: state => {
        let total = 0
        state.items.forEach(item => {
            total += item.price * item.quantity
        })
        return total
    }
}

export const mutations = {
    //add item to cart
    add(state, payload) {
        state.items.push({
            product : payload,
        })
    },
    //remove item from cart
    remove(state, item) {
        state.items.splice(state.items.indexOf(item), 1)
    }
    //make the item disabled
    // disable(state, item) {
    // }
}