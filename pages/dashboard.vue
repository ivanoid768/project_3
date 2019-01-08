<template> 
  <div class="wrapper_main container">
    <Navigation></Navigation> 
    <div class="page" v-if="accountInfo !==null">

      <div class="block" id="block-statistics">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="block-title-slot">
                  <h3 class="block-title">Мой хешрейт</h3>
                </div>
              </div>
              <div class="col-md-4">
                <div class="block-title-slot">
                  <div class="block_statistics_currency_course">
                    <span class="crypto_currency_selected">BITCOIN</span>
                    <span class="currseny_selected_course">USD: <i class="currency_selected_value">55.40</i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="block-body">
          <div class="row">
            <div class="col-md-4">
              <div class="plate">
                <div class="plate_title" id="plate_my_hashrate">
                  <h3>Мой хешрейт</h3>
                </div>
                <div class="plate_body prop_container">
                  <div class="prop_row">
                    <span class="prop_name">
                      Текущий хешрейт
                    </span>
                    <div class="prop_value">
                      <span class="prop_value_int">{{parseInt(accountInfo.hashrate)}}<i class="prop_value_currency">{{selectedMeasure}}</i></span>
                    </div>
                  </div>
                  <div class="prop_row">
                    <span class="prop_name">
                      Средний хешрейт<br /> за 24 часа
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">{{parseInt(accountInfo.avgHashrate24h)}}<i class="prop_value_currency">{{selectedMeasure}}</i></span>
                    </span>
                  </div>
                  <div class="prop_row">
                    <span class="prop_name">
                      Средний хешрейт <br />за 1 час
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">{{parseInt(accountInfo.avgHashrate1h)}}<i class="prop_value_currency">{{selectedMeasure}}</i></span>
                    </span>
                  </div>
                </div>
                <div class="plate-footer">

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="plate">
                <div class="plate_title">
                  <h3>Воркеры</h3>
                </div>
                <div class="plate_body prop_container worker_container">
                  <div class="prop_row">
                    <span class="prop_name">
                      Активные
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">356</span>
                    </span>
                  </div>
                  <div class="prop_row">
                    <span class="prop_name">
                      Неактивные
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">259</span>
                    </span>
                  </div>
                </div>
                <div class="plate-footer">

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="plate">
                <div class="plate_title">
                  <h3>Информация по аккаунту</h3>
                </div>
                <div class="plate_body prop_container info_container">
                  <div class="prop_row">
                    <div class="prop_name">
                      Баланс
                    </div>
                    <div class="prop_value flex-disable">
                      <span class="prop_value_int">{{accountInfo.balance}}<i class="prop_value_currency">{{selectedCurrency}}</i></span>
                      <div class="prop_preloader"></div>
                    </div>
                  </div>
                  <div class="prop_row">
                    <div class="prop_name">
                      Начислено <br />за 24 часа
                    </div>
                    <div class="prop_value flex-disable">
                      <span class="prop_value_int">{{accountInfo.rewards24}}<i class="prop_value_currency">{{selectedCurrency}}</i></span>

                    </div>
                  </div>
                  <div class="prop_row">
                    <div class="prop_name">
                      Начислено <br />за все время
                    </div>
                    <div class="prop_value flex-disable">
                      <span class="prop_value_int">{{accountInfo.rewards}}<i class="prop_value_currency">{{selectedCurrency}}</i></span>

                    </div>
                  </div>
                </div>
                <div class="plate-footer">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-footer">

        </div>
      </div>
      <div class="block" id="hashrate_table">
        <div class="block-title text-center">
        </div>
        <div class="block-body">
          <div class="plate table_graphic_plate">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6 text-right">
                  <div class="component-inline scale">
                    <div class="component-inner">
                      <div class="label">
                        Масштаб
                      </div>
                      <div class="scale-buttons">
                        <ul class="scale-buttons-list">
                          <li class="scale-list-item"><button class="scale-button" v-bind:class="chartsPeriod === '12h'? 'active': ''" data-period="12h" @click="setChartsPeriod">12 ч</button></li>
                          <li class="scale-list-item "><button class="scale-button " v-bind:class="chartsPeriod === '24h'? 'active': ''" data-period="24h" @click="setChartsPeriod">24 ч</button></li>
                          <li class="scale-list-item"><button class="scale-button" v-bind:class="chartsPeriod === '3d'? 'active': ''" data-period="3d" @click="setChartsPeriod">3 д </button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <b>Хешрейт</b><br /><br />
                </div>
                <div class="col-md-6 text-right">

                </div>
              </div>
            </div>
            <Table_graphic_line :height="200" :dataset="chartHashrate"  v-if="chartHashrate !==null" />
            <div class="dash_preloader" v-else>
              <img src="~assets/img/gears-anim.gif" />
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <b>Шары</b><br /><br />
                </div>
                <div class="col-md-6 text-right">

                </div>
              </div>
            </div>
            <Table_graphic_bar :height="200" :dataset="chartShares" v-if="chartShares !==null" />
            <div class="dash_preloader" v-else>
              <img src="~assets/img/gears-anim.gif" />
            </div>
            <div class="plate-legend container-fluid">
              <div class="row">
                <div class="col">
                  <span class="legend-marker red"></span>
                  Рассчетный хэшрейт -  2-х часовое SMA
                </div>
                <div class="col">
                  <span class="legend-marker yellow"></span>
                  Принятые шары
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" id="remuniration_calc">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title text-left">Калькулятор доходности</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-title-slot">

                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="block-body">
          <div class="plate ">
            <div class="plate_body max-width">
              <Table_calc />
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

  import Navigation from '~/components/web_components/header_components/Navigation.vue';
  import Table_data from '~/components/web_components/dashboard/Table_data.vue';
  import Table_calc from '~/components/web_components/dashboard/Table_calc.vue';
  import Table_graphic_bar from '~/components/web_components/dashboard/Table_graphic_bar.vue';
  import Table_graphic_line from '~/components/web_components/dashboard/Table_graphic_line.vue';
  import axios from 'axios';



  let apiKey = "6523bff0c04a55a9db2e8c1ffd332c38";
  let apiUrl = "https://btc.sigmapool.com/api/v1/";
  let apiSet ={
      getWorkers:`${apiUrl}workers`,
      getShares: `${apiUrl}charts/shares`,
      getEarnings:`${apiUrl}earnings`,
  }

  export default {
    components: {   Navigation, Table_data, Table_graphic_bar, Table_graphic_line, Table_calc  },
    
    data: function(){
    return {
        name: "Dashboard",
        //accountInfo:null,
        updateData: null,
        chartsPeriod: "24h",
        //chartShares:  null,
        //chartHashrate:null
      }
    },
    computed: {
      accountInfo() {
        return this.$store.state.dashboard.accountInfo;
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
      workersInfo() {
        return this.$store.state.dashboard.workersInfo;
      }
      
    },
    watch:{
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
      getDataFromApi: function(){
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
            _this.$store.commit("dashboard/setChartShares",  response.data);
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
           
            _this.$store.commit("dashboard/setChartHashrate",   response.data);
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
        this.getDataFromApi();
        this.getChartShares();
        this.getChartHashrate();
    },
    mounted : function() {
      console.log(">>>>", this.$store.state.dashboard);

      this.$nextTick(() => {
      this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 500)

        //setInterval(() => {
        //  //this.getChartShares();
        //  //this.getChartHashrate();
        //}, 500)
    })
  },
  beforeDestroy: function(){
       
    }
  }
</script>

<style>
 
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
