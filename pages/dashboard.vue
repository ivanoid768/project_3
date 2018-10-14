<template> 
  <div class="wrapper_main container">
  <Navigation></Navigation>
    <div class="page">
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
                      <span class="prop_value_int">356</span> <i class="prop_value_measure">THS/s</i>
                    </div>
                  </div>
                  <div class="prop_row">
                    <span class="prop_name">
                     Средний хешрейт<br /> за 24 часа
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">356</span> <i class="prop_value_measure">THS/s</i>
                    </span>
                  </div>
                  <div class="prop_row">
                    <span class="prop_name">
                      Средний хешрейт <br />за 1 час
                    </span>
                    <span class="prop_value">
                      <span class="prop_value_int">356</span> <i class="prop_value_measure">THS/s</i>
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
                    <div class="prop_value">
                      <span class="prop_value_int">-<i class="prop_value_currency"></i></span>
                      <div class="prop_preloader"></div>
                    </div>
                  </div>
                  <div class="prop_row">
                    <div class="prop_name">
                      Начислено <br />за 24 часа
                    </div>
                    <div class="prop_value">
                      <span class="prop_value_int">-<i class="prop_value_currency"></i></span>
                      <div class="prop_preloader"></div>
                    </div>
                  </div>
                  <div class="prop_row">
                    <div class="prop_name">
                      Начислено <br />за все время
                    </div>
                    <div class="prop_value">
                      <span class="prop_value_int">-<i class="prop_value_currency"></i></span>
                      <div class="prop_preloader"></div>
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
             <Table_graphic_line   :height="200"/>
             <Table_graphic_bar :height="200" />
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
          <div class="plate">
              <Table_data  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Navigation from '~/components/web_components/header_components/Navigation.vue';
  import Table_data from '~/components/web_components/dashboard/Table_data.vue';
  import Table_graphic_bar from '~/components/web_components/dashboard/Table_graphic_bar.vue';
  import Table_graphic_line from '~/components/web_components/dashboard/Table_graphic_line.vue';
  import axios from 'axios';



  let ApiKey = "6523bff0c04a55a9db2e8c1ffd332c38";

  let api={
      "getWorkers":"",
      "getShares":"",
      "getWorkers":"",
  }

  export default {
  components: {   Navigation, Table_data, Table_graphic_bar, Table_graphic_line  },
  data: function(){
  return {
      name: "Dashboard",
      data: {
        accountInfo:null,
        
      },
    }
  },
    methods:{
      getDataFromApi: function(){
        var apiKey="6523bff0c04a55a9db2e8c1ffd332c38";
        axios.get(`https://btc.sigmapool.com/api/v1/stats?key=${apiKey}`)
        .then(function (response) {
          console.log("datat", response.data);
          data

        })
        .catch(function (error) {
          console.log(error);
        });

      }
    },
    created: function () {
      if(typeof window ==="object"){
        console.log('Dashboard отрисован, загружаю данные: ')
        this.getDataFromApi();
      }
    },mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
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
