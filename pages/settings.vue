<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page settings ">
      <form>
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
                      <span class="tooltip">

                      </span>
                    </span>
                  </h3>
                </div>
                <div class="plate_body">

                  <div class="url-table">
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">URL #1</span>
                      </div>
                      <div class="col col-form-label"><span
                          class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">URL #2</span>
                      </div>
                      <div class="col col-form-label"><span
                          class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">URL #3</span>
                      </div>
                      <div class="col col-form-label"><span
                          class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">Майнер</span>
                      </div>
                      <div class="col col-form-label"><span
                          class="option-label">indimining.WORKER_NAME</span></div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">Пароль</span>
                      </div>
                      <div class="col col-form-label"><span class="option-label">Любой
                          (необязательно)</span></div>
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
                      <span class="tooltip">
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
                          <input v-model="doubleFactorAuth" type="hidden" value="false" />
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
              <Payment></Payment>
            </div>
            <div class="col-md-6">
              <Notifications></Notifications>
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
                <div class="plate_body max-width">
                  <Table_history_notify />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!---END PAGE-->
      </form>
    </div>
    <!--END WRAPPER-->
  </div>

</template>

<script>
  import Navigation from '~/components/web_components/header_components/Navigation.vue'
  import Table_history_notify from '~/components/web_components/settings/Table_history_notify.vue';
  import Pagination from '~/components/web_components/edit_components/pagination.vue';
  import Payment from '~/components/web_components/settings/Payment';
  import Notifications from '~/components/web_components/settings/Notifications';

  import { mapState } from 'vuex';
  export default {
    components: { Navigation, Table_history_notify, Pagination, Payment, Notifications },
    props: {
      data: {
        default: function () {
          return {
            twoAuthorAuth: false,
            paymentType: "PPS"
          }
        },

      }
    },
    computed: {
      ...mapState('settings', ['paymentType', 'paymentLimit', 'paymentAddress', 'doubleFactorAuth'])
    },
    methods: {
      setSettingValue: function (e) {
        let name = e.currentTarget.dataset.name;
        let value = e.currentTarget.dataset.value;
        this.$store.commit(`settings/setSettingParam`, { name: name, value: value })
      }
    },
    mounted: function () {


    }
  }
</script>
