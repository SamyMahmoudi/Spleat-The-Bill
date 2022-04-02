export const state = () => ({
    //store cart
    items: [],
})

export const mutations = {
    //add item to cart
    add(state, payload) {
        state.items.push({
            name : payload,
        })
    },
    //remove item from cart
    remove(state, item) {
        state.items.splice(state.items.indexOf(item), 1)
    }
}