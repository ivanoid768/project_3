<template>
  <table class="table_data payments" v-if="dataset !==null">
    <tr>
      <th v-for="head in headers">{{head}}</th>
    </tr>
    <tr v-for="item in dataset">
      <td>{{item.id}}</td>
      <td>{{moment(item.created).format("DD.MM.YYYY HH:mm:ss")}}</td>
      <td>{{item.transactionconfirmationdata}}</td>
      <td>{{item.amount}}</td>

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
        return  [
            "#",
            "Дата",
            "Транзакция",
            "Сумма"
          ]
        }
      },
      page: {
        default: 1
      },
      pageSize:{
        default: 20
      }
    },
    data: function () {
      return {
        currency: "BTC"//this.$store.settings.currentCurrency
      }
    },
    methods: {
      moment: function () {
        return moment()
      }
    }

  }
</script>
