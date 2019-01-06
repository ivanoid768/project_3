
export const dashboard = () => ({
  selectedMeasure: "THS/s",
  defaultCurrency: "BTC",
  accountInfo: {}, 
  charts: { 
    shares: [],
    hashrate: []
  }

});

export const mutations = {
  accountInfo(state, data) {
    state.accountInfo = data;
  },
  setChart(state, chart, data) {
    state[chart] = data;
  } 
 
}
 

export const getters = {
  selectedMeasure(state) {
    return state.selectedMeasure;
  },
  chartShares(state) {
    return state.charts.shares;
  },
  chartHashrate(state) {
    return state.charts.hashrate;
  },
  accountInfo(state) {
    return state.accountInfo;
  }
}
