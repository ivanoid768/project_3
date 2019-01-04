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
                            <li class="scale-list-item"><button class="scale-button">12 ч</button></li>
                            <li class="scale-list-item "><button class="scale-button active">24 ч</button></li>
                            <li class="scale-list-item"><button class="scale-button">3 д </button></li>
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
              <Table_graphic_line :height="200" :dataset="chartHashrate" />
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <b>Шары</b><br /><br />
                  </div>
                  <div class="col-md-6 text-right">

                  </div>
                </div>
              </div>
              <Table_graphic_bar :height="200" :dataset="chartShares" />
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
                <Table_calc  />
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
  props:{
    selectedCurrency:{
        default:"BTC"
    },
  selectedMeasure:{
      default:"THS/s"
    }
  },
  data: function(){
  return {
      name: "Dashboard",
      accountInfo:null,
      updateData: null,
      chartShares:  null,
      chartHashrate:null
    }
  },
    methods:{
      getDataFromApi: function(){
        let _this = this;
        axios.get(`/api/stats`)
        .then(function (response) {
          _this.accountInfo = response.data;
          _this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

      },
      getChartShares: function () {
        let _this = this;
        axios.get(`/api/charts/shares`)
          .then(function (response) {
            _this.chartShares = response.data;
            _this.$forceUpdate();
          })
          .catch(function (error) {
            console.log(error);
          });

      },
      getChartHashrate: function () {
        let _this = this;
        axios.get(`/api/charts/hashrate`)
          .then(function (response) {
            _this.chartHashrate = response.data;
            _this.$forceUpdate();
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
      

      this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
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
