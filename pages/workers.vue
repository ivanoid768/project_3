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
                <Table_workers :workersCount="workersCount" v-bind:dataset="workersData" :onFilter="onFilter" @onSearch="onSearch" />
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
    components: { Navigation, Table_workers },
    data: () => {
      return {
        workersData: null
      }
    },

    computed: {
      selectedCurrency() {
        return this.$store.state.settings.currency.toLowerCase();
      },
      apiKey() {
        return this.$store.state.settings.apiKey;
      }
    },
    watch: {
      selectedCurrency(newCount, oldCount) {
        this.workersData = null;
        this.getWorkersFromApi();
      }
    },
    methods: {
      getWorkersFromApi: function () {
        let _this = this;
        axios.get(`/api/${this.selectedCurrency}/workers?key=${this.apiKey}`)
          .then(function (response) {
            _this.workersData = response.data;

            _this.$forceUpdate();
          })
          .catch(function (error) {
            console.log(error);
          });

      },
      async onFilter(status) {
        let { data: workersData } = await this.$axios.get(`/api/${this.selectedCurrency}/workers?key=${this.apiKey}`, {
          params: {
            status: status
          }
        })

        this.workersData = workersData;
      },
      async onSearch(search) {
        let params = {}

        if (search)
          params.search = search

        let { data: workersData } = await this.$axios.get(`/api/${this.selectedCurrency}/workers?key=${this.apiKey}`, {
          params: params
        })

        this.workersData = workersData;
      }
    },
    async asyncData({ store, app }) {
      let selectedCurrency = store.state.settings.currency.toLowerCase();

      let { data: onlineWorkersCount } = await app.$axios.get(`/api/${selectedCurrency}/workers/count`, {
        params: {
          status: 'online'
        }
      })

      let { data: offlineWorkersCount } = await app.$axios.get(`/api/${selectedCurrency}/workers/count`, {
        params: {
          status: 'offline'
        }
      })
      return {
        workersCount: {
          all: onlineWorkersCount + offlineWorkersCount,
          online: onlineWorkersCount,
          offline: offlineWorkersCount
        }

      }
    },
    created: function () {
      let _this = this;
      this.getWorkersFromApi();
    },
    mounted: function () {



      this.$nextTick(() => {
        this.$nuxt.$loading.start()


        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    beforeDestroy: function () {

    }
  }</script>
