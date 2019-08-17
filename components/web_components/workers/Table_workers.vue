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
                <li><button @click="onLimitChanged" data-limit="25"> 25</button></li>
                <li><button @click="onLimitChanged" data-limit="50"> 50 </button></li>
                <li><button @click="onLimitChanged" data-limit="100"> 100</button></li>
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
                <li><button @click="onSort" data-sort="name"> Имя</button></li>
                <li><button @click="onSort" data-sort="lastShareTime"> Последняя шара</button></li>
                <li><button @click="onSort" data-sort="hashrate"> Текущий хешрейт</button></li>
                <li><button @click="onSort" data-sort="avg1Hashrate"> Средний хешрейт за час</button></li>
                <li><button @click="onSort" data-sort="avg24Hashrate"> Средний хешрейт за 24ч</button></li>
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
        <td>{{btfyHash(item.hashrate)}}</td>
        <td>{{btfyHash(item.avg1Hashrate)}}</td>
        <td>{{btfyHash(item.avg24Hashrate)}}</td>
      </tr>
    </table>
    <div class="dash_preloader" v-else>
      <img src="~assets/img/gears-anim.gif" />
    </div>
  </div>
</template> 

<script>
  import { hashRoundWithPrefix } from '../../../utils/hashPrefix'

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
        sort: "Имя",
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
      },
      onLimitChanged(e) {
        // debugger
        let limit = e.target.dataset.limit
        this.limit = limit
        this.$emit('onLimit', this.limit)
      },
      onSort(e) {
        let sort = e.target.dataset.sort

        let namekeyhash = {
          name: 'Имя',
          lastShareTime: 'Последняя шара',
          hashrate: 'Текущий хешрейт',
          avg1Hashrate: 'Средний хешрейт за час',
          avg24Hashrate: 'Средний хешрейт за 24ч'
        }

        this.sort = namekeyhash[sort]
        this.$emit('onSort', sort)
      },
      btfyHash(hash) {
        return hashRoundWithPrefix(hash)
      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  div#item-pagesize.filter:hover ul {
    display: block;
    margin-left: 140px;
    padding: 0;
    text-align: right;
  }

  div#item-name.filter:hover .dropdown-list {
    display: block;
    padding: 0;
    text-align: center;
  }

  // div#item-name.filter:hover .dropdown-list button {
  //   text-align: right;
  // }

  .dropdown-list li {
    list-style: none;
  }

  .dropdown-list {
    padding-left: 0;
  }
</style>