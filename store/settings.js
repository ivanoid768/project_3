 
export const state = () =>({ 
      apiKey:"6523bff0c04a55a9db2e8c1ffd332c38",
      currency: "BTC",
      user: null, 
      defaultCurrency: "BTC",
      doubleFactorAuth: false,
      passwordReset: false,
      workersTurnOff: false,
       paymentType: "PPS",
      paymentLimit: [{ currency: "BTC", value: "0,1" }],
      paymentAddress: "example@gmail.com",
      actionsHistory:null,
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
}

export const getters = {
  currency(state) {
    return state.currency;
  },
  apiKey(state){
    return state.apiKey;
  },
  user(state) {
    return state.user;
  }

}
