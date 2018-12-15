 
export const settings = () =>({ 
      currency:"BTC",
      defaultCurrency: "BTC",
      security: {
        doubleFactorAuth: false,
        passwordReset: false,
      },
      notifications: {
        workersTurnOff: false
      },
      payments: {
        paymentScheme: "PPS",
        paymentLimit: [{ currency: "BTC", value: "0,1" }],
        paymentAddress: "example@gmail.com",
      },
      actionsHistory:null,
      exchangeRate: [{
        currency: "BTC",
        targetCurrency: "USD",
        value: "54.50"
      }]  
}) 

export const mutations = {
  setUser(settings, user) {
    
    settings.user = user;
  },
  setCurrency(state, currency) {
    console.log("state:::::", state)
    state.currency = currency
  },
  setSettingParam(state, paramName, value) {
    state[paramName] = value
  }
}

export const getters = {
  currency(state) {
    return state.currency;
  },
}
