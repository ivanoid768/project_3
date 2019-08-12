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
                <Table_workers :workersCount="workersCount" v-bind:dataset="sortedWorkersData" :onFilter="onFilter" @onSearch="onSearch"
                  @onLimit="onLimit" @onSort="onSort" />
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
        workersData: null,
        reqParams: {},
        sort: 'name'
      }
    },

    computed: {
      selectedCurrency() {
        return this.$store.state.settings.currency.toLowerCase();
      },
      apiKey() {
        return this.$store.state.settings.apiKey;
      },
      sortedWorkersData() {
        return this.sortWorkers(this.sort)
      }
    },
    watch: {
      selectedCurrency(newCount, oldCount) {
        this.workersData = null;
        this.updateWorkers();
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
      async updateWorkers(params) {
        let prm = params || this.reqParams;

        let { data: workersData } = await this.$axios.get(`/api/${this.selectedCurrency}/workers?key=${this.apiKey}`, {
          params: prm
        })

        this.workersData = workersData;
      },
      async onFilter(status) {
        if (status)
          this.reqParams.status = status;
        else
          delete this.reqParams.status

        await this.updateWorkers();

      },
      async onSearch(search) {
        if (search)
          this.reqParams.search = search;
        else
          delete this.reqParams.search

        await this.updateWorkers();
      },
      async onLimit(limit) {
        if (limit)
          this.reqParams.limit = limit;
        else
          delete this.reqParams.limit

        await this.updateWorkers();
      },
      onSort(sort) {
        // debugger
        this.sort = sort;
        this.workersData = this.sortWorkers(sort)
      },
      sortWorkers(sort) {
        if (!this.workersData)
          return null;

        let workers = [...this.workersData];

        workers.sort((a, b) => {
          if (a[sort] > b[sort]) return 1;
          if (a[sort] == b[sort]) return 0;
          if (a[sort] < b[sort]) return -1;
        })

        return workers;
        // console.log(workers);
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
