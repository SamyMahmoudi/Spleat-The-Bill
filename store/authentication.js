export const state = () => ({
    name: null,
})

export const mutations = {
  getName(state, payload) {
    state.name = payload
  }
}