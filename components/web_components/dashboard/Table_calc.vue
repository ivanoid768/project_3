<template>
  <table class="table_data calc">
    <tr>
      <th v-for="head in headers">{{head}}</th>
    </tr>
    <tr>
      <td>Минута</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Час</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>День</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Неделя</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Месяц</td>
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
