 <script>
  import { Bar} from 'vue-chartjs'

   export default {
     props: {
       dataset: {
         default: () => { return [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }
       }
     },
     data: () => {
       return {
         options: {
           barPercentage: "4",
           maxBarThickness: "4",
           barThickness: 4,
           responsive: true,
           maintainAspectRatio: false,

         }
       }

     },
     extends: Bar, 
    mounted() {
      // Overwriting base render method with actual data.
       
      this.renderChart({
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [
          {
            label: "",
            backgroundColor: '#ffa573',
            data: this.dataset
          }
        ]
      },
        this.options
      )
    }
  }

</script>
