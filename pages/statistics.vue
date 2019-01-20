<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page" v-if="statistics !==null">
      <div id="block-workers-title" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Статистика пула</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-title-slot">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--END block-title-->
      <div id="block-payments" class="block">
        <div class="row">
          <div class="col-md-12">
            <div class="plate">
              <div class="plate_title">
              </div>
              <div class="plate_body max-width">
                <Table_statistics v-bind:dataset="statistics" />
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div id="block-workers-title" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Хешрейт пула</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-title-slot">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--END block-title-->
      <div id="block-payments" class="block">
        <div class="row">
          <div class="col-md-12">
            <div class="plate">
              <div class="plate_title">
              </div>
              <div class="plate_body max-width">
                <Table_graphic_bar :height="200" :chartData="chartHashrate" :period="chartsPeriod" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--END block-title-->
      <div id="block-workers-title" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Хешрейт сети</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-title-slot">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--END block-title-->
      <div id="block-payments" class="block">
        <div class="row">
          <div class="col-md-12">
            <div class="plate">
              <div class="plate_title">
              </div>
              <div class="plate_body max-width">
                <Table_graphic_bar :height="200" :chartData="chartHashrate" :period="chartsPeriod" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash_preloader" v-else>
      <img src="~assets/img/gears-anim.gif" />
    </div>
  </div>
</template>
<script>
    import Navigation from '~/components/web_components/header_components/Navigation.vue'
   import Table_statistics from '~/components/web_components/statistics/Table_statistics.vue';
   import Table_graphic_line from '~/components/web_components/dashboard/Table_graphic_line.vue';
   import axios from 'axios';
   let apiKey = "6523bff0c04a55a9db2e8c1ffd332c38";

  export default {
    components: { Navigation, Table_statistics, Table_graphic_line },
    data: () => {
      return {
        chartsPeriod: '24h'
      }
    },
    computed: {
      statistics() {
        let data = this.$store.state.dashboard.accountInfo;
        let currency = this.$store.state.settings.currency;
        if (data === null) {
          return null
        }
        let statTable = [
          { label: "Монета", name: "currency", value: currency },
          { label: "Доходность за 24 часа", name: "24hprofit", value: data.profit.day },
          { label: "Схема выплат", name: "paymentscheme", value: data.scheme },
          { label: "Процент комиссии", name: "Comission", value: data.threshold },
          { label: "Подключенные майнеры", name: "Miners", value: "-" },
          { label: "Хэшрейт пула", name: "HashratePool",  value: "-" },
          { label: "Хешрейт сети", name: "HashrateNet", value: "-" },
          { label: "Высота блока", name: "BlockHeight", value: "-" }
        ] 
        console.log(statTable);
        return statTable;
          
      },
      selectedCurrency() {
        return this.$store.state.settings.currency.toLowerCase();
      },
      apiKey() {
        return this.$store.state.settings.apiKey;
      },
      selectedMeasure() {
        return this.$store.state.dashboard.selectedMeasure;
      },
      chartShares() {
        return this.$store.state.dashboard.charts.shares;
      },
      chartHashrate() {
        return this.$store.state.dashboard.charts.hashrate;
      },
    },
    watch: {
      selectedCurrency(newCount, oldCount) {
        this.clearAll();
        this.getDataFromApi();
        this.getChartShares();
        this.getChartHashrate();
      }
    },

    methods: {
    setChartsPeriod(e) {
      let period = e.currentTarget.dataset.period;
      this.chartsPeriod = period;
      this.clearCharts();
      this.getChartShares();
      this.getChartHashrate();
    },
    clearAll: function () {
      this.$store.commit("dashboard/setAccountInfo", null);
      this.$store.commit("dashboard/setChartShares", null);
      this.$store.commit("dashboard/setChartHashrate", null);
    },
    clearCharts: function () {
      this.$store.commit("dashboard/setChartShares", null);
      this.$store.commit("dashboard/setChartHashrate", null);
    },
    getDataFromApi: function () {
      let _this = this;
      axios.get(`/api/${this.selectedCurrency}/stats?key=${this.apiKey}`)
        .then(function (response) {
          console.log("response", response)
          _this.$store.commit("dashboard/setAccountInfo", response.data);
          //_this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    getWorkersFromApi: function () {
      let _this = this;
      axios.get(`/api/${this.selectedCurrency}/workers?key=${this.apiKey}`)
        .then(function (response) {
          _this.$store.commit("dashboard/setWokersInfo", response.data);

        })
        .catch(function (error) {
          console.log(error);
        });

    },
    getChartShares: function () {
      let _this = this;
      axios.get(`/api/${this.selectedCurrency}/charts/shares?period=${this.chartsPeriod}&key=${this.apiKey}`)
        .then(function (response) {
          _this.$store.commit("dashboard/setChartShares", response.data);
          // _this.chartShares = response.data;
          //_this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    getChartHashrate: function () {
      let _this = this;
      axios.get(`/api/${this.selectedCurrency}/charts/hashrate?period=${this.chartsPeriod}&key=${this.apiKey}`)
        .then(function (response) {

          _this.$store.commit("dashboard/setChartHashrate", response.data);
          //_this.chartHashrate = response.data;
          //_this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

    },
      getSMAHashrate: function () {
        let _this = this;
        axios.get(`/api/${this.selectedCurrency}/charts/sma?period=${this.chartsPeriod}&key=${this.apiKey}`)
          .then(function (response) {

            _this.$store.commit("dashboard/setChartSMAHashrate", response.data);
            //_this.chartHashrate = response.data;
            //_this.$forceUpdate();
          })
          .catch(function (error) {
            console.log(error);
          });

      },
  },
  created: function () {
    let _this = this;
    this.clearAll();
    this.getDataFromApi();
    this.getChartShares();
    this.getChartHashrate();
  },
    mounted : function() {

      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  beforeDestroy: function(){
      if(typeof this.updateData !=="null"){
        clearInterval(this.updateData)
      }
    }
  }</script>
