<template>
  <table class="table_data">  
    <tr >
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
            "Мо",
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
    mounted: () => {
      if (typeof window == "object") {
        console.log("table-statistics", data)
      }
    },
    data:function (){
      return {
        
      }
    },

  }
</script>
