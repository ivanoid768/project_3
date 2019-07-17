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
                      <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">URL #2</span>
                      </div>
                      <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">URL #3</span>
                      </div>
                      <div class="col col-form-label"><span class="option-label">stratum+tcp://eu.ltc.sigmapool.com:3333</span></div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-2 col-form-label"><span class="url-label">Майнер</span>
                      </div>
                      <div class="col col-form-label"><span class="option-label">indimining.WORKER_NAME</span></div>
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
              <Security></Security>
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
        <UserActionsHistory></UserActionsHistory>

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
  import Security from '~/components/web_components/settings/Security';
  import UserActionsHistory from '~/components/web_components/settings/UserActionsHistory';

  import { mapState } from 'vuex';
  export default {
    components: { Navigation, Table_history_notify, Pagination, Payment, Notifications, Security },
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
