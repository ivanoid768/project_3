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
              <div class="plate_body">
                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-4 col-form-label">
                      <span class="url-label">Схема выплат</span>
                    </div>
                    <div class="col-md-4  col-form-label">
                      <div class="controll option-selector">
                        <button class="option active" value="PPS">PPS</button>
                        <button class="option" value="PPLNS">PPLNS</button>
                      </div>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn active">Обновить</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-3 col-form-label">
                      <span class="url-label">Порог выплат </br>
                        <i class="label-measure">(>= 0.01 LTC)</i></span>
                    </div>
                    <div class="col-md-5  col-form-label">
                      <div class="controll  number-selector"> 
                            <input type="number"  step="0.01" value="0.01" />
                            <span class="arrow-top"></span>
                            <span class="arrow-bottom"></span>
                      </div>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn active">Изменить</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <div class="form-row">
                    <div class="col col-form-label">
                      <span class="url-label col-mrg">Адрес выплат</span>
                      <input type="text" value="Адрес выплат" class="controll field-text full-width col-mrg" name="paymentAddress" />
                      <button class="controll btn active">Обновить</button>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title"><h3>Уведомления  </h3></div>
              <div class="plate_body">
                <div class="option form-group">
                  <div class="form-row">
                    <div class="col-md-1 col-form-label">
                      <label class="controll checkbox">
                        <input type="hidden" value="false" />
                        <span class="checkbox-check">	&#10003;</span>
                      </label>
                    </div>
                    <div class="col-md-7 col-form-label">
                      <span class="option-label">Уведомлять при отключении воркеров</span>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn active">Обновить</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="plate_title"><h3>Анонимность  </h3></div>
              <div class="plate_body">
                <div class="option form-group">
                  <div class="form-row">
                    <div class="col-md-1 col-form-label">
                      <label class="controll checkbox">
                        <input type="hidden" value="false" />
                        <span class="checkbox-check">	&#10003;</span>
                      </label>
                    </div>
                    <div class="col-md-7 col-form-label">
                      <span class="option-label">Уведомлять при отключении воркеров</span>
                    </div>
                    <div class="col-md-4 col-form-label">
                      <button class="controll btn active">Обновить</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plate_title">
                    <h3>
                          API-доступ  <span class="el_question">
                            <i class="fa fa-question"></i>
                            <span class="el_question_body">
                              ?
                            </span>
                          </span>
                    </h3>
              </div>
              <div class="plate_body">
                <div class="option form-group  col-mrg">
                  <span class="option-label ">API-ключ(нажмите, чтобы скопировать)</span>
                  <div class="form-row">
                    <div class="col col-form-label col-mrg"> 
                        <input type="text" value="46546546test" class="controll field-text" name="apiKey" /> 
                    </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <a href="" class="option-link">Полная JSON API документация</a>
                     </div> 
                   </div>
                </div>
              </div>
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
                <Table_history_notify />
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
 import Table_history_notify from '~/components/web_components/settings/Table_history_notify.vue';

  export default {
    components: {   Navigation, Table_history_notify  },
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
