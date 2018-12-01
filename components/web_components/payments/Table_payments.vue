<template>
  <table class="table_data payments">
    <tr>
      <th v-for="head in headers">{{head}}</th>
    </tr>
    <tr v-for="item in data">
      <td>{{item.name}}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
  export default {
    props: {
      data: {
        default: function () {
          return [
            {}, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      },
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
