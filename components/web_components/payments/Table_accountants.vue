<template>
  <table class="table_data accountants" v-if="dataset !==null">
    <tr>
      <th v-for="(head,index) in headers" :key="index">{{head}}</th>
    </tr>
    <tr v-for="(item,index) in dataset" :key="index">
      <td>{{moment(item.created).format("DD.MM.YYYY HH:mm:ss")}}</td>
      <td>{{item.amount}} {{currency}}</td>
      <td>{{item.usage}}</td>
      <td>{{item.bonus}}</td>
    </tr>
  </table>
  <div class="dash_preloader" v-else>
    <img src="~assets/img/gears-anim.gif" />
  </div>
</template>

<script>

  import moment from 'moment';

  export default {
    props: {
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
            "Дата ",
            "Сумма",
            "Информация",
            "Бонус"
          ]
        }
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
        currency: "BTC"//this.$store.settings.currentCurrency
      }
    },
    methods: {
      moment: function (...args) {
        return moment(args)
      }
    }

  }
</script>
