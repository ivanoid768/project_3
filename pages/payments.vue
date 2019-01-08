<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page">
      <div id="block-payments-title" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Начисления</h3>
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
                <Pagination />
                <Table_accountants v-bind:dataset="earningsData" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="block-payments-title" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="block-title-slot">
                  <h3 class="block-title">Выплаты</h3>
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
                <Pagination />
                <Table_payments v-bind:dataset="paymentsData" />
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
  import Table_payments from '~/components/web_components/payments/Table_payments.vue';
  import Table_accountants from '~/components/web_components/payments/Table_accountants.vue';
  import Pagination from '~/components/web_components/edit_components/pagination.vue';
  import axios from 'axios';
  export default {
  components: {   Navigation , Table_payments, Table_accountants, Pagination },
  data:()=>{
       return {
           paymentsData:null,
           earningsData:null
       }
    },
  methods:{
      getPaymentsFromApi: function(params){
        let _this = this;
        axios.get(`/api/payments`)
        .then(function (response) {
          _this.paymentsData = response.data; 
          _this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

      },
     getEarningsFromApi: function(params){
        let _this = this;
        axios.get(`/api/earnings`)
        .then(function (response) {
          _this.earningsData = response.data; 
          _this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

      }
    },
    created: function () {
          let _this = this;
          this.getPaymentsFromApi();
          this.getEarningsFromApi();
    },
    mounted : function() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  beforeDestroy: function(){

    }
  }</script>
