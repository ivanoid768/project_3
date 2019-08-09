
export const state = () => ({
  selectedMeasure: "THS/s",
  defaultCurrency: "BTC",
  workersInfo: null,
  workersCount: { active: null, notActive: null },
  charts: {
    shares: [],
    hashrate: [],
    sma: []
  },
  accountInfo: null,

});

export const mutations = {
  setChartSMAHashrate(state, data) {
    state.charts.sma = data;
  },
  setAccountInfo(state, data) {
    state.accountInfo = data;
  },
  setChartHashrate(state, data) {
    state.charts.hashrate = data;
  },
  setChartShares(state, data) {
    state.charts.shares = data;
  },
  setWokersInfo(state, data) {
    state.workersInfo = data;
  },
  setWorkersCount(state, data) {
    state.workersCount = data;
  },
  setSelectedMeasure(state, data) {
    state.selectedMeasure = data
  },

}


export const getters = {
  selectedMeasure(state) {
    return state.selectedMeasure;
  },
  accountInfo(state) {

    return state.accountInfo;
  },
  workersInfo(state) {
    return state.workersInfo;
  },
  chartShares(state) {
    return state.charts.shares;
  },
  chartHashrate(state) {
    return state.charts.hashrate;
  },

}
