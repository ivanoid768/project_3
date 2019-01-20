<template>
  <table class="table_data statistics">  
    <tr v-for="head in dataset">
      <td>{{head.label}}  </td>
      <td>{{head.value}}</td>
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
      dataset: {
        default: function () {
        return  [
          { label: "Монета", name: "currency" , value: "BTC"} ,
          { label: "Доходность за 24 часа", name: "24hprofit" } ,
          { label: "Схема выплат", name: "paymentscheme" },
          { label: "Процент комиссии", name: "Comission" },
          { label: "Подключенные майнеры", name: "Miners" },
          { label: "Хэшрейт пула", name: "HashratePool" },
          { label: "Хешрейт сети", name: "HashrateNet" },
          { label: "Высота блока", name: "BlockHeight" }
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
    mounted: function () {
      if (typeof window == "object") {
        console.log("table-statistics", this.data)
      }
    }

  }
</script>
