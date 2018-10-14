<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page">
      <div id="block-help-nav" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="block-title-slot">
                  <ul class="navbar nav helppage_subnav">
                    <li class="nav-item">
                      <button>Подключение к пулу</button>
                    </li>
                    <li class="nav_item">
                      <button class="active">НАчало работы</button>
                    </li>
                    <li class="nav_item">
                      <button>ЧЗВ</button>
                    </li>
                    <li class="nav_item">
                      <button>API документация</button>
                    </li>
                    <li class="nav_item">
                      <button>Поддержка</button>
                    </li>
                  </ul>
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
      </div>
      <div id="block-help" class="block">
        <div class="row">
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title">
                  <h3></h3>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="plate">
              <div class="plate_title filled">
                <h3>Основной пул</h3>
              </div>
              <div class="plate_body">

              </div>
            </div>
            <div class="plate">
              <div class="plate_title filled">
                <h3>Основной пул</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>

  import Navigation from '~/components/web_components/header_components/Navigation.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
  components: {   Navigation , FontAwesomeIcon }
  }
</script>
