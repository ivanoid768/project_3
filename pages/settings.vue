<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page settings ">
      <div id="block-statistics" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Настройки</h3>
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
      <div class="block">
        <div class="row">
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title">
                <h3>
                  Подключение к пулу
                  <span class="el_question">
                    <i class="fa fa-question"></i>
                    <span class="el_question_body">
                      ?
                    </span>
                  </span>
                </h3>
              </div>
              <div class="plate_body">

                <div class="url-table">
                  <div class="form-row">
                    <div class="col-sm-2 col-form-label"><span class="url-label">URL #1</span></div>
                    <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-2 col-form-label"><span class="url-label">URL #2</span></div>
                    <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                  </div>

                  <div class="form-row">
                    <div class="col-sm-2 col-form-label"><span class="url-label">URL #3</span></div>
                    <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-2 col-form-label"><span class="url-label">Майнер</span></div>
                    <div class="col col-form-label"><span class="option-label">indimining.WORKER_NAME</span></div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-2 col-form-label"><span class="url-label">Пароль</span></div>
                    <div class="col col-form-label"><span class="option-label">Любой (необязательно)</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title">
                <h3>
                  Безопастность
                  <span class="el_question">
                    <i class="fa fa-question"></i>
                    <span class="el_question_body">
                      ?
                    </span>
                  </span>
                </h3>
              </div>
              <div class="plate_body">
                <div class="option form-group">
                  <div class="form-row">
                    <div class="col col-form-label">
                      <span class="option-label">Двухфакторная аутентификация</span>
                    </div>
                    <div class="col col-form-label">
                      <label class="controll switcher active">
                        <span class="switcher-label active">ВКЛ</span>
                        <input type="hidden" value="false" />
                        <span class="toggle"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="option form-group">
                  <div class="form-sub-header">Настройки аккаунта</div>
                  <div class="form-row">
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn">Новый пароль</button>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn">Подтвердить</button>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn active">Сменить пароль</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!------------>
      <div class="block">
        <div class="row">
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title"><h3>Настройки выплат</h3></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title"><h3>Уведомления  </h3></div>
            </div>
          </div>
        </div>
      </div>
      <div id="block-statistics" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">История действий</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-title-slot">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="plate">
              <div class="plate_title"></div>
              <div class="plate_body">
                <Table_data />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!---END PAGE-->
    </div>
    <!--END WRAPPER-->
  </div>
 

</template>

<script>
 import Navigation from '~/components/web_components/header_components/Navigation.vue'
  import Table_data from '~/components/web_components/dashboard/Table_data.vue';

  export default {
    components: {   Navigation, Table_data  },
    props:{
      data:{
        default: function (){
          return {
             settings: {}
            }
        },
       selectedCurrency:{
            default: "BTC"
        }
      }
    },
    methods:{
       setSettingValue: function(name, value){
         
      }
    },
    mounted: function(){

       console.log("store", this.$store)

    }
  }
</script>
