
export const statistics = () => ({
  currency: "BTC",
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
  actionsHistory: null,
  exchangeRate: [{
    currency: "BTC",
    targetCurrency: "USD",
    value: "54.50"
  }],
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
