<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page" v-if="statistics !==null">
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
                <Table_statistics v-bind:dataset="statistics" />
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
                <Table_graphic_line v-bind:dataset="statistics" />
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
                <Table_graphic_line v-bind:dataset="statistics"/>
              </div>
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
    import Navigation from '~/components/web_components/header_components/Navigation.vue'
   import Table_statistics from '~/components/web_components/statistics/Table_statistics.vue';
   import Table_graphic_line from '~/components/web_components/dashboard/Table_graphic_line.vue';
   import axios from 'axios';
   let apiKey = "6523bff0c04a55a9db2e8c1ffd332c38";

  export default {
  components: {   Navigation , Table_statistics, Table_graphic_line},
  data: ()=>{
    return{
      statistics:null,
      selectedPeriod: "PERIOD",
      updateData: null
    }
  },
  methods:{

      getDataFromApi: function(){
        let _this = this;
        axios.get(`/api/stats`)
        .then(function (response) {
        //console.log("statistics",response)
          _this.statistics = response.data.data;
          _this.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });

      }
    },
    created: function () {
          let _this = this;
          this.getDataFromApi();
          if(typeof window ==="object"){
                this.updateData= setInterval(() =>{
                  console.log("statistics",this.statistics)
                  _this.getDataFromApi()
              }, 3000)
            }
    },
    mounted : function() {

      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  beforeDestroy: function(){
      if(typeof this.updateData !=="null"){
        clearInterval(this.updateData)
      }
    }
  }</script>
