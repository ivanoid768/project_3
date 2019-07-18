
export const state = () => ({
  apiKey: "6523bff0c04a55a9db2e8c1ffd332c38",
  currency: "BTC",
  user: null,
  defaultCurrency: "BTC",
  doubleFactorAuth: false,
  passwordReset: false,
  workersTurnOff: false,
  hideUserNameInPool: false,
  paymentType: "",
  paymentLimit: [{ currency: "BTC", value: "" }],
  paymentAddress: "example@gmail.com",
  actionsHistory: null,
  exchangeRate: [{
    currency: "BTC",
    targetCurrency: "USD",
    value: "54.50"
  }],

})

export const mutations = {
  setUser(settings, user) {
    settings.user = user;
  },
  setUserName(state, userName) {
    state.user = userName;
  },
  setCurrency(state, currency) {
    state.currency = currency
  },
  setSettingParam(state, obj) {
    state[obj.name] = obj.value
  },
  setApiKey(state, apiKey) {
    state.apiKey = apiKey
  },
  updateSettings(state, settings) {

    console.log(state, settings)
    // debugger

    for (let setting in settings) {
      state[setting] = settings[setting]
    }

  },
  setPaymentLimit(state, payload) {
    state.paymentLimit.filter(limit => limit.currency == payload.currency)[0].value = payload.value;
  }
}

export const getters = {
  currency(state) {
    return state.currency;
  },
  apiKey(state) {
    return state.apiKey;
  },
  user(state) {
    return state.user;
  }

}

export const actions = {
  persistSettings({ state }) {

    console.log(state, state.paymentType);

    this.$axios.post('/api/auth/settings', state)

  },
  fetchSettings({ state, commit }) {

    this.$axios.get('/api/auth/settings')
      .then(resp => {
        commit('updateSettings', resp.data)
      })

  }
}
