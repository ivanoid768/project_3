
export const state = () => ({
  data: null
})

export const mutations = {
  setData(state, data) {
    state.data=data
  }
}


export const getters = {
  data(state) {
    return state.data;
  },
  apiKey(state) {
    return state.apiKey;
  },
  user(state) {
    return state.user;
  }

}
