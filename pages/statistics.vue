<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page">
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
              <div class="plate_body">
                <Table_data />
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
              <div class="plate_body">
                <Table_data />
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
              <div class="plate_body">
                <Table_data />
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
   import Table_data from '~/components/web_components/dashboard/Table_data.vue';
  export default {
  components: {   Navigation , Table_data }
  }</script>
