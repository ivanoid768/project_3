<template>
  <div class="table_workers">
    <div class="block_table_filter">
      <div class="row">
        <div class="col-md-4">
          <div class="filter" id="item-pagesize">
            <button @click="filterOnline"><span class="filter-button-label">Онлайн</span> <span
                class="filter-indicator">{{workersCount.online}}</span></button>
            <button @click="filterOffline"><span class="filter-button-label">Оффлайн</span> <span
                class="filter-indicator">{{workersCount.offline}}</span></button>
            <button @click="filterAll"><span class="filter-button-label">Общее</span> <span
                class="filter-indicator">{{workersCount.all}}</span></button>
            <div class="filter-text">
              Отображаются только <b>{{filterStatus}}</b> воркеры
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="filter search" id="item-search">
            <div class="search inner">
              <input @keypress.enter="onSearch" type="text" placeholder="Поиск" v-model="search" />
              <i @click="onSearch" class="icon-search"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="filter" id="item-pagesize">
            <span class="filter-label">
              Макс на странице:{{limit}}
            </span>

            <div class="dropdown-block">
              <span class="dropdown-active"></span>
              <ul class="dropdown-list">
                <li><button> 25</button></li>
                <li><button> 50 </button></li>
                <li><button> 100</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="filter" id="item-name">
            <span class="filter-label">
              Сортировать по : {{sort}}
            </span>

            <div class="dropdown-block">
              <span class="dropdown-active"></span>
              <ul class="dropdown-list">
                <li><button> Имя</button></li>
                <li><button> Последняя шара</button></li>
                <li><button> Текущий хешрейт</button></li>
                <li><button> Средний хешрейт за час</button></li>
                <li><button> Средний хешрейт за 24ч</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table_data workers" v-if="dataset !==null">
      <tr>
        <th v-for="(head, index) in headers" :key="index">{{head}}</th>
      </tr>
      <tr v-for="(item, index) in dataset" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.lastShareTime}}</td>
        <td>{{item.hashrate}}</td>
        <td>{{item.avg1Hashrate}}</td>
        <td>{{item.avg24Hashrate}}</td>
      </tr>
    </table>
    <div class="dash_preloader" v-else>
      <img src="~assets/img/gears-anim.gif" />
    </div>
  </div>
</template> 

<script>
  export default {
    props: {
      workersCount: {
        default: {
          all: 0,
          online: 0,
          offline: 0
        }
      },
      dataset: {
        default: function () {
          return [
            {}, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      },
      headers: {
        default: function () {
          return [
            "Имя",
            "Последняя шара",
            "Текущий хешрейт",
            "Средний хешрейт за час",
            "Средний хешрейт за 24 часа"
          ]
        }
      },
      onFilter: {
        default: () => { }
      },
      page: {
        default: 1
      },
      pageSize: {
        default: 20
      }
    },
    data: function () {
      return {
        limit: 25,
        sort: "имени",
        filterStatus: 'online',
        search: ''
      }
    },
    methods: {
      filterOnline() {
        this.onFilter('online')
        this.filterStatus = 'online'
      },
      filterOffline() {
        this.onFilter('offline')
        this.filterStatus = 'offline'
      },
      filterAll() {
        this.onFilter('any')
        this.filterStatus = 'all'
      },
      onSearch() {
        this.$emit('onSearch', this.search)
      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  div#item-pagesize.filter:hover ul {
    display: block;
    margin-left: 135px;
  }
</style>