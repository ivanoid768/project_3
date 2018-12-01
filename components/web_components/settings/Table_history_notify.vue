<template>
  <table class="table_data history-notify">
    <tr>
      <th v-for="head in headers">{{head}}</th>
    </tr>
    <tr v-for="item in data">
      <td>{{item.name}}</td>
      <td>{{item.date}}</td>
      <td>{{item.ipAddress}}</td> 
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
            "Действие/Уведомление",
            "Дата",
            "IP",
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
