<template>
  <table class="table_data calc">
    <tr>
      <th :key="i" v-for="(head, i) in headers">{{head}}</th>
    </tr>
    <tr>
      <td>Минута</td>
      <td>{{btc.hour/60}}</td>
      <td>{{ltc.hour/60}}</td>
      <td>{{dash.hour/60}}</td>
    </tr>
    <tr>
      <td>Час</td>
      <td>{{btc.hour}}</td>
      <td>{{ltc.hour}}</td>
      <td>{{dash.hour}}</td>
    </tr>
    <tr>
      <td>День</td>
      <td>{{btc.day}}</td>
      <td>{{ltc.day}}</td>
      <td>{{dash.day}}</td>
    </tr>
    <tr>
      <td>Неделя</td>
      <td>{{btc.week}}</td>
      <td>{{ltc.week}}</td>
      <td>{{dash.week}}</td>
    </tr>
    <tr>
      <td>Месяц</td>
      <td>{{btc.month}}</td>
      <td>{{ltc.month}}</td>
      <td>{{dash.month}}</td>
    </tr>
  </table>
</template> 

<script>
  export default {
    props: {   
      ltc: {},
      dash: {},
      btc: {},
      headers: {
        default: function () {
        return  [
            "Период",
            "BTC",
            "LTC",
            "DASH"
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
    data:function (){
      return {
        
      }
    },

  }
</script>
