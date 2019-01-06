
export const state = () => ({
  selectedMeasure: "THS/s",
  defaultCurrency: "BTC", 
  charts: { 
    shares: [],
    hashrate: []
  },
  accountInfo: null, 

});

export const mutations = {
  setAccountInfo(state, data) {
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
  accountInfo(state) { 

    return state.accountInfo;
  },
  chartShares(state) {
    return state.charts.shares;
  },
  chartHashrate(state) {
    return state.charts.hashrate;
  },
  
}
