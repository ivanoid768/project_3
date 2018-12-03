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
                  <h3 class="block-title">Воркеры</h3>
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
                <Table_workers v-bind:dataset="workersData" />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <!--END block-title-->
    
    </div>
  </div>
</template>
<script>
  import Navigation from '~/components/web_components/header_components/Navigation.vue'
  import Table_workers from '~/components/web_components/workers/Table_workers.vue';
  import axios from 'axios';

  export default {
    components: {   Navigation , Table_workers },
    data:()=>{
       workersData:[]
    },
  methods:{
      getWorkersFromApi: function(){
        let _this = this;
        axios.get(`/api/workers`)
        .then(function (response) {
          _this.workersData = response.data;
          _this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

      }
    },
    created: function () {
          let _this = this;
          this.getWorkersFromApi();
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
